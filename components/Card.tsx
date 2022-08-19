import Image from 'next/image';

type CardProps = {};

const Card = () => {
  return (
    <div className='h-128 w-full bg-gray-200 overflow-hidden relative group first:col-span-2'>
      <Image
        src='/images/1.jpg'
        alt='nizhyn'
        layout='fill'
        className='object-cover w-full h-full z-0 drop-shadow-2xl lg:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
      />
      <div className='bg-black w-full h-full z-1 flex flex-col items-center justify-center absolute bg-opacity-60 shadow-2xl'>
        <h3 className='text-white font-medium uppercase text-3xl hover-green'>
          Nizhyn City
        </h3>
        <p className='text-slate-200 text-base my-2 uppercase hover-green'>
          Place
        </p>
        <div className='bg-green w-10 my-3 h-1' />
        <div className='text-white uppercase font-medium hover-green'>
          Read Post &#8594;
        </div>
      </div>
      <div className='absolute bottom-8 left-4 flex w-full items-center cursor-pointer lg:opacity-0 lg:translate-y-12 group-hover:opacity-80 group-hover:translate-y-0 transition-all duration-700'>
        <div className='w-12 h-12 rounded-full overflow-hidden relative'>
          <Image
            src='/images/user.png'
            alt='Author Avatar'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='text-white ml-4 font-light hover-green'>
          Roman Tyschuk
        </div>
      </div>
    </div>
  );
};

export default Card;