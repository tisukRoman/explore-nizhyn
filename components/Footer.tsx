import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-6 w-full h-32 bg-[#000] relative'>
      <Image
        src='/images/footer.jpg'
        alt='footer image'
        layout='fill'
        className='object-cover'
      />
      <div className='absolute bg-[#000] bg-opacity-80 w-full h-full text-white flex justify-center items-center flex-col'>
        <cite>Досліджуй Ніжин &#169; 2022</cite>
        <p>Проєкт Тищука Романа</p>
      </div>
    </footer>
  );
};

export default Footer;
