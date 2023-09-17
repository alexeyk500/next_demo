import React from 'react';

import Navigation, { NavLinkType } from '@/Components/Header/Navigation/Navigation';

import classes from './Header.module.css';

const links: NavLinkType[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

const Header: React.FC = () => {
  return (
    <header className={classes.container}>
      <Navigation links={links} />
    </header>
  );
};

export default Header;
