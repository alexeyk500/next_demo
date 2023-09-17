import React from 'react';

import classes from './AboutLayout.module.css';
import Link from 'next/link';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h2>{'Page about us'}</h2>
        <ul>
          <li>
            <Link href={'/about/contacts'}>{'Contacts'}</Link>
          </li>
          <li>
            <Link href={'/about/team'}>{'Team'}</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
