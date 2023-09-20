import React from 'react';

import GoogleButton from '@/components/GoogleButton/GoogleButton';
import SignInForm from '@/components/SignInForm/SignInForm';

import classes from './SignIn.module.css';

const SignIn: React.FC = async () => {
  return (
    <div className={classes.container}>
      <h1>{'Sign In page'}</h1>
      <div className={classes.content}>
        <GoogleButton />
        <h5>{'----- or -----'}</h5>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
