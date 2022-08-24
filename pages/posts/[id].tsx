import { GetServerSideProps, NextPage } from 'next';
import { Post } from '../../utils/types';
import { db } from '../../utils/db';
import Header from '../../components/Header';
import PostCover from '../../components/PostCover';

const PostDetails: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Header />
      <main className='pt-20'>
        <PostCover
          title={post.title || 'title'}
          created_at={post.created_at || 'created_at'}
          img_src={post.img_src || '/images/placeholder.png'}
          tag={post.tag || 'tag'}
        />
        <article className='text-slate-200 text-lg p-8 font-mono'>
          {post.content}
        </article>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const post_id = ctx.params?.id;

  if (!post_id) {
    return {
      props: {},
    };
  }

  const post = await db.getPostDetails(Number(post_id));
  return {
    props: { post },
  };
};

export default PostDetails;
