import Link from 'next/link';
import { FC, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };

  return (
    <header className='w-screen h-20 bg-[#000] fixed z-10 text-white'>
      <nav className='max-w-[90%] xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm h-20 mx-auto flex items-center text-2xl'>
        <Link href='/'>
          <h1 className='grow hover-green'>NIZHYN</h1>
        </Link>
        <div onClick={toggleMenu} className='mr-8 hover-green'>
          <BiMenu />
        </div>
        <Link href='/'>
          <a className='mr-8 hover-green'>
            <BiSearchAlt2 />
          </a>
        </Link>
        <Link href='/'>
          <a className='hover-green'>
            <BiUser />
          </a>
        </Link>
      </nav>
      <div
        className={`fixed top-20 right-1 bg-[#000] w-full overflow-hidden transition-all ${
          isOpen ? 'h-40' : 'h-0'
        }`}
      >
        <Link href='/'>
          <a className='block p-4 border-t-[1px] w-[95%] border-gray-300 border-opacity-20 pl-8 font-base text-sm hover-green'>
            AUTHOR LIST
          </a>
        </Link>
        <Link href='/'>
          <a className='block p-4 border-t-[1px] w-[95%] border-gray-300 border-opacity-20 pl-8 font-base text-sm hover-green'>
            TAG LIST
          </a>
        </Link>
        <Link href='/'>
          <a className='block p-4 border-t-[1px] w-[95%] border-gray-300 border-opacity-20 pl-8 font-base text-sm hover-green'>
            ABOUT ME
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
