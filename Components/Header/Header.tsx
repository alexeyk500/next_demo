import React from 'react';
import classes from './Header.module.css';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={classes.container}>
      <Link href={'/'}>Home</Link>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/about'}>About</Link>
    </header>
  );
};

export default Header;
