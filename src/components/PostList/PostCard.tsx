import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Post } from '@utils/types';
import { baseURL } from '@config/baseURL';
import { useAuth } from '@hooks/useAuth';
import { useDeletePost } from '@hooks/useDeletePost';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';

type PostCardProps = {
  post: Post;
  index: number;
};

const PostCard: FC<PostCardProps> = ({ post, index }) => {
  const router = useRouter();
  const { user } = useAuth();

  const [deletePost] = useDeletePost();

  const onCopyLink = () => {
    window.navigator.clipboard.writeText(`${baseURL}/posts/${post.id}`);
  };

  const onEditPost = () => {
    router.push(`/posts/edit/${post.id}`);
  };

  const onDeletePost = async () => {
    await deletePost(post.id);
  };

  const buttons = [
    { onClick: onCopyLink, title: 'Копіювати посилання', icon: <BiLink /> },
    { onClick: onEditPost, title: 'Редагувати Пост', icon: <AiOutlineEdit /> },
    {
      onClick: onDeletePost,
      title: 'Видалити пост',
      icon: <AiOutlineDelete />,
    },
  ];

  const buttonsToRender =
    user?.id === post.profiles?.id ? buttons : [buttons[0]];

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className='h-128 w-full bg-gray-200 overflow-hidden relative group lg:first:col-span-2'
    >
      <Image
        unoptimized
        src={post.img_src || '/images/placeholder.png'}
        alt={post.title}
        layout='fill'
        className='object-cover w-full h-full z-0 drop-shadow-2xl lg:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
      />
      <article className='bg-black w-full h-full z-1 flex flex-col items-center justify-center absolute bg-opacity-60 shadow-2xl'>
        <Link href={`/posts/${post.id}`} shallow={true}>
          <h3 className='text-white font-medium uppercase text-3xl hover-green text-center max-w-[80%] mx-auto'>
            {post.title}
          </h3>
        </Link>
        <p className='text-slate-200 text-base my-2 uppercase hover-green'>
          {post.tag}
        </p>
        <div className='bg-green w-10 my-3 h-1' />
        <Link href={`/posts/${post.id}`} shallow={true}>
          <a className='text-white uppercase font-medium hover-green'>
            Читати пост &#8594;
          </a>
        </Link>
      </article>
      <div className='absolute bottom-8 left-4 flex w-full items-center cursor-pointer lg:opacity-0 lg:translate-y-12 group-hover:opacity-80 group-hover:translate-y-0 transition-all duration-700'>
        <div className='w-12 h-12 rounded-full overflow-hidden relative'>
          <Image
            unoptimized
            src={post.profiles?.avatar_url || '/images/user.png'}
            alt='Author Avatar'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='text-white ml-4 font-light hover-green'>
          {post.profiles?.username}
        </div>
      </div>
      <div className='absolute top-4 right-4 flex justify-center items-center cursor-pointer text-3xl lg:opacity-0 lg:-translate-y-10 group-hover:opacity-60 group-hover:translate-y-0 transition-all duration-700'>
        {buttonsToRender.map((button) => (
          <div
            key={button.title}
            onClick={button.onClick}
            title={button.title}
            className='ml-4 w-14 h-14 bg-slate-200 bg-opacity-60 hover:bg-opacity-100 rounded-full flex items-center justify-center'
          >
            {button.icon}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PostCard;
