import { FC, FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Profile } from '@utils/types';
import { db } from '@utils/db';
import { useAuth } from '@hooks/useAuth';
import { useToggle } from '@hooks/useToggle';
import { FiMenu } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { FaChurch } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import HeaderTextLinks from './HeaderTextLinks';
import HeaderMobileModal from './HeaderMobileModal';
import HeaderSearchModal from './HeaderSearchModal';

export const Header: FC = () => {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [mobileModal, toggleMobileModal] = useToggle(false);
  const [searchModal, toggleSearchModal] = useToggle(false);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    async function loadProfile() {
      const profileId = user?.id;
      if (profileId) {
        const data = await db.getProfile(profileId);
        setProfile(data);
      }
    }
    loadProfile();
  }, [user]);

  const onLogout = async () => {
    await signOut();
    setProfile(null);
    router.push('/');
  };

  const renderMobileModal = () => {
    if (mobileModal) {
      return <HeaderMobileModal onClose={() => toggleMobileModal(false)} />;
    }
  };

  const renderSearchModal = () => {
    if (searchModal) {
      return (
        <HeaderSearchModal
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onSearch={onSearch}
          onClose={() => toggleSearchModal(false)}
        />
      );
    }
  };

  const onSearchChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchValue((e.target as HTMLInputElement).value);
  };

  const onSearch = (e: Event) => {
    if ((e as KeyboardEvent).key === 'Enter' || e.type === 'click') {
      toggleSearchModal(false);
      router.push(`/?q=${searchValue}`);
    }
  };

  return (
    <header className='w-screen h-20 bg-[#000] fixed z-10 text-white'>
      <>
        <nav className='max-w-[90%] xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm h-20 mx-auto flex items-center text-2xl'>
          <Link href='/'>
            <h1 className='grow'>
              <a
                title='Домашня сторінка'
                className='hover-green font-serif items-center flex'
              >
                Ніжин <FaChurch className='ml-5' />
              </a>
            </h1>
          </Link>
          <div
            onClick={toggleMobileModal as any}
            title='Меню'
            className='hover-green lg:hidden'
          >
            <FiMenu />
          </div>
          <div className='hidden lg:flex'>
            <HeaderTextLinks />
          </div>
          <div
            onClick={toggleSearchModal as any}
            title='Шукати пост'
            className='hover-green ml-5 md:ml-8'
          >
            <BiSearchAlt2 />
          </div>
          {profile ? (
            <>
              <div
                onClick={onLogout}
                title='Вийти з акаунту'
                className='hover-green ml-5 md:ml-8'
              >
                <AiOutlineLogout />
              </div>
              <div className='ml-5 md:ml-8 overflow-hidden relative w-9 h-9 rounded-full'>
                <Image
                  unoptimized
                  title={profile.username}
                  src={
                    profile.avatar_url ? profile.avatar_url : '/images/user.png'
                  }
                  alt='user avatar'
                  layout='fill'
                  className='object-cover w-full h-full'
                />
              </div>
            </>
          ) : (
            <Link href='/auth/login'>
              <a title='Увійти' className='hover-green ml-5 md:ml-8'>
                <BiUser />
              </a>
            </Link>
          )}
        </nav>
        {renderMobileModal()}
        {renderSearchModal()}
      </>
    </header>
  );
};