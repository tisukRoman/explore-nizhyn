import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '../utils/db';
import { FiMenu } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { FaChurch } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useSession } from '../hooks/useSession';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const session = useSession();
  const userAvatar = session?.user?.user_metadata.avatar_url;

  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };

  const onLogout = async () => {
    await db.logout();
  };

  return (
    <header className='w-screen h-20 bg-[#000] fixed z-10 text-white'>
      <nav className='max-w-[90%] xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm h-20 mx-auto flex items-center text-2xl'>
        <Link href='/'>
          <h1 className='grow'>
            <a className='hover-green font-serif items-center flex'>
              Ніжин <FaChurch className='ml-5' />
            </a>
          </h1>
        </Link>
        <div onClick={toggleMenu} className='hover-green lg:hidden'>
          <FiMenu />
        </div>
        <div className='hidden lg:flex'>
          <TextLinks />
        </div>
        <Link href='/'>
          <a className='hover-green ml-5 md:ml-8'>
            <BiSearchAlt2 />
          </a>
        </Link>
        {session ? (
          <>
            <div onClick={onLogout} className='hover-green ml-5 md:ml-8'>
              <AiOutlineLogout />
            </div>
            <div className='ml-5 md:ml-8 overflow-hidden relative w-9 h-9 rounded-full'>
              <Image
                unoptimized
                src={userAvatar ? userAvatar : '/images/user.png'}
                alt='user avatar'
                layout='fill'
                className='object-cover w-full h-full'
              />
            </div>
          </>
        ) : (
          <Link href='/auth/login'>
            <a className='hover-green ml-5 md:ml-8'>
              <BiUser />
            </a>
          </Link>
        )}
      </nav>
      <div
        className={`fixed top-20 left-0 bg-[#000] w-[90vw] md:max-w-screen-sm md:left-2/4 md:-translate-x-1/2 overflow-hidden transition-all ${
          isOpen ? 'h-40' : 'h-0'
        }`}
      >
        <TextLinks />
      </div>
    </header>
  );
};

const TextLinks: FC = () => {
  const links = [
    { title: 'Автори', href: '/authors' },
    { title: 'Теги', href: '/tags' },
    { title: 'Про мене', href: '/about_me' },
  ];
  return (
    <>
      {links.map(({ title, href }) => (
        <Link key={title} href={href}>
          <a className='block p-4 border-t-[1px] border-gray-300 border-opacity-20 pl-8 font-light text-sm hover-green lg:border-none'>
            {title}
          </a>
        </Link>
      ))}
    </>
  );
};

export default Header;
