import Link from 'next/link';
import { FC } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';

const Header: FC = () => {
  return (
    <header className='w-screen h-20 bg-[#000] fixed z-10 text-white'>
      <nav className='max-w-[90%] xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm h-20 mx-auto flex items-center text-2xl'>
        <h1 className='grow'>NIZHYN</h1>
        <Link href='/'>
          <a className='mr-8'>
            <BiMenu />
          </a>
        </Link>
        <Link href='/'>
          <a className='mr-8'>
            <BiSearchAlt2 />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <BiUser />
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
