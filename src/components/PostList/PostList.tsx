import { FC, Fragment } from 'react';
import { Post } from '@utils/types';
import Card from './PostCard';

type PostListProps = {
  pages: Post[][];
};

export const PostList: FC<PostListProps> = ({ pages }) => (
  <div className='p-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 max-w-screen-2xl mx-auto'>
    {pages.map((posts, page) => (
      <Fragment key={page}>
        {posts.map((post, index) => (
          <Card key={post.id} post={post} index={index} />
        ))}
      </Fragment>
    ))}
  </div>
);
