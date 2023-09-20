'use client';
import React from 'react';

import classes from './GoogleButton.module.css';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  const onClick = () => {
    signIn('google', { callbackUrl }).then();
  };

  return (
    <button className={classes.button} onClick={onClick}>
      {'Sign In with Google'}
    </button>
  );
};

export default GoogleButton;
