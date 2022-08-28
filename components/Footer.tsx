import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-32 bg-[#000] relative'>
      <Image
        src='/images/footer.jpg'
        alt='footer image'
        layout='fill'
        className='object-cover'
      />
      <div className='absolute bg-[#000] bg-opacity-80 w-full h-full text-white flex justify-center items-center flex-col'>
        <div>Досліджуй Ніжин &#169; 2022</div>
        <div>Проєкт Тищука Романа</div>
      </div>
    </div>
  );
};

export default Footer;
