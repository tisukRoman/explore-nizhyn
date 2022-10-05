import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { db } from '@utils/db';
import { Post, Profile } from '@utils/types';

const getAuthor = async (author_id: string) => {
  const [posts, profile] = await Promise.all([
    db.getAuthorPosts(author_id),
    db.getProfile(author_id),
  ]);
  return { posts, profile };
};

export const useGetAuthor = (
  author_id: string
): [
  { posts: Post[]; profile: Profile } | undefined,
  boolean,
  PostgrestError | null
] => {
  const client = useQueryClient();

  const { data, isFetching, error } = useQuery<
    { posts: Post[]; profile: Profile },
    PostgrestError
  >(['authors', author_id], () => getAuthor(author_id), {
    placeholderData: () => {
      const initialAuthors = client.getQueryData(['authors']) as
        | Profile[]
        | undefined;
      if (initialAuthors) {
        const initialProfile = initialAuthors.find(
          (author) => String(author.id) === author_id
        );
        return {
          profile: initialProfile as Profile,
          posts: [] as Post[],
        };
      }
    },
  });
  return [data, isFetching, error];
};
