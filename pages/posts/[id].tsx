import { GetServerSideProps, NextPage } from 'next';
import { Post } from '../../utils/types';
import { db } from '../../utils/db';
import Header from '../../components/Header';
import PostCover from '../../components/PostCover';

const PostDetails: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Header />
      <main className='pt-20 mx-auto lg:max-w-screen-lg shadow-xl shadow-[#1a1a1a]'>
        <PostCover
          title={post.title || 'title'}
          created_at={post.created_at || 'created_at'}
          img_src={post.img_src || '/images/placeholder.png'}
          tag={post.tag || 'tag'}
        />
        <article className='text-slate-300 text-lg px-8 py-12 font-mono md:text-2xl'>
          <p className='leading-8 md:leading-10'>{post.content}</p>
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
