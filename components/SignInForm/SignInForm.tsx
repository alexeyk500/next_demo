'use client';
import React, { FormEvent } from 'react';

import classes from './SignInForm.module.css';
import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';

const SignInForm = () => {
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = (await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })) as SignInResponse;
    if (res && !res.error) {
      router.push('/profile');
    } else {
      console.log(res);
    }
  };

  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <form className={classes.container} onSubmit={onSubmit}>
      {hydrated && (
        <>
          <label className={classes.label}>
            {'email'}
            <input type={'email'} name={'email'} required autoComplete={'off'} />
          </label>
          <label className={classes.label}>
            {'password'}
            <input type={'password'} name={'password'} required autoComplete={'current-password'} />
          </label>
        </>
      )}
      <div className={classes.btnContainer}>
        <button type={'submit'} className={classes.button}>
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
