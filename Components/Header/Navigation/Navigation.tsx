'use client';

import React from 'react';

import classes from './Navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type NavLinkType = {
  label: string;
  href: string;
};

interface INavigationProps {
  links: NavLinkType[];
}

const Navigation: React.FC<INavigationProps> = ({ links }) => {
  const path = usePathname();

  return (
    <div className={classes.container}>
      {links.map((link, ind) => {
        const isActive = path.split('/')[1] === link.href.split('/')[1];
        return (
          <Link key={ind} className={isActive ? classes.active : ''} href={link.href}>
            {link.label}
          </Link>
        )
      })}
    </div>
  );
};

export default Navigation;
