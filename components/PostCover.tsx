import Image from 'next/image';
import { FC } from 'react';

type PostCoverProps = {
  title: string;
  created_at: string;
  img_src: string;
  tag: string;
};

const PostCover: FC<PostCoverProps> = (props) => {
  return (
    <div className='w-screen h-128 bg-[#000] relative'>
      <Image
        unoptimized
        src={props.img_src}
        alt={props.title}
        layout='fill'
        className='h-full object-cover opacity-60'
      />
      <div className='bg-black w-full h-full z-1 flex flex-col items-center justify-center absolute bg-opacity-60 shadow-2xl'>
        <h3 className='text-white font-medium uppercase text-3xl hover-green text-center max-w-[80%] mx-auto'>
          {props.title}
        </h3>
        <p className='text-slate-200 text-base my-2 uppercase hover-green'>
          {props.tag}
        </p>
        <div className='bg-green w-10 my-3 h-1' />
      </div>
    </div>
  );
};

export default PostCover;
