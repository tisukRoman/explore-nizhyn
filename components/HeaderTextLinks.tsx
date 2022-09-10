import Link from "next/link";
import { FC } from "react";
import { useAuth } from "@hooks/useAuth";

const HeaderTextLinks: FC = () => {
  const { user } = useAuth();

  const links = [
    { title: 'Автори', href: '/authors' },
    {
      title: 'Мої пости',
      href: user ? `/authors/${user.id}` : '/auth/login',
    },
    { title: 'Створити пост', href: user ? `/posts/create` : '/auth/login' },
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

export default HeaderTextLinks;
