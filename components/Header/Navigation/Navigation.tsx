'use client';

import React from 'react';

import classes from './Navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export type NavLinkType = {
  label: string;
  href: string;
};

interface INavigationProps {
  links: NavLinkType[];
}

const Navigation: React.FC<INavigationProps> = ({ links }) => {
  const path = usePathname();
  const session = useSession();

  const isProfilePage = path.split('/')[1] === 'profile';

  const onClickSignOut = async () => {
    signOut({ callbackUrl: '/' }).then();
  };

  return (
    <div className={classes.container}>
      {links.map((link, ind) => {
        const isActive = path.split('/')[1] === link.href.split('/')[1];
        return (
          <Link key={ind} className={isActive ? classes.active : ''} href={link.href}>
            {link.label}
          </Link>
        );
      })}
      {session?.data && (
        <Link key={'profile'} className={isProfilePage ? classes.active : ''} href={'/profile'}>
          {'Profile'}
        </Link>
      )}
      {session?.data ? (
        <Link key={'logOut'} href={'#'} onClick={onClickSignOut}>
          {'Sign Out'}
        </Link>
      ) : (
        <Link key={'signIn'} href={'/signin'}>
          {'Sign In'}
        </Link>
      )}
    </div>
  );
};

export default Navigation;
