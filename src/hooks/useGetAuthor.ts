import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { db } from '@utils/db';
import { Post, Profile } from '@utils/types';
import { useRouter } from 'next/router';

const getAuthor = async (authorId: string) => {
  const [posts, profile] = await Promise.all([
    db.getAuthorPosts(authorId),
    db.getProfile(authorId),
  ]);
  return { posts, profile };
};

export const useGetAuthor = (): [
  { posts: Post[]; profile: Profile } | undefined,
  boolean,
  PostgrestError | null
] => {
  const client = useQueryClient();
  const router = useRouter();
  const authorId = router.query?.id as string;

  const { data, isFetching, error } = useQuery<
    { posts: Post[]; profile: Profile },
    PostgrestError
  >(['authors', authorId], () => getAuthor(authorId), {
    placeholderData: () => {
      const initialAuthors = client.getQueryData(['authors']) as
        | Profile[]
        | undefined;
      if (initialAuthors) {
        const initialProfile = initialAuthors.find(
          (author) => String(author.id) === authorId
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
