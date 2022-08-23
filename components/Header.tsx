import Link from 'next/link';
import { FC, useState } from 'react';
import { FaChurch } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { useSession } from '../hooks/useSession';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const session = useSession();

  console.log(session);

  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };

  return (
    <header className='w-screen h-20 bg-[#000] fixed z-10 text-white'>
      <nav className='max-w-[90%] xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm h-20 mx-auto flex items-center text-2xl'>
        <Link href='/'>
          <h1 className='grow hover-green font-serif flex items-center'>
            Nizhyn <FaChurch className='ml-4' />
          </h1>
        </Link>
        <div onClick={toggleMenu} className='hover-green lg:hidden'>
          <BiMenu />
        </div>
        <div className='hidden lg:flex'>
          <TextLinks />
        </div>
        <Link href='/'>
          <a className='hover-green ml-10'>
            <BiSearchAlt2 />
          </a>
        </Link>
        <Link href='/auth/login'>
          <a className='hover-green ml-10'>
            <BiUser />
          </a>
        </Link>
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
  return (
    <>
      <Link href='/'>
        <a className='block p-4 border-t-[1px] border-gray-300 border-opacity-20 pl-8 font-light text-sm hover-green lg:border-none'>
          AUTHOR LIST
        </a>
      </Link>
      <Link href='/'>
        <a className='block p-4 border-t-[1px] border-gray-300 border-opacity-20 pl-8 font-light text-sm hover-green lg:border-none'>
          TAG LIST
        </a>
      </Link>
      <Link href='/'>
        <a className='block p-4 border-t-[1px] border-gray-300 border-opacity-20 pl-8 font-light text-sm hover-green lg:border-none'>
          ABOUT ME
        </a>
      </Link>
    </>
  );
};

export default Header;
