import React from 'react';

import { authConfig } from '@/configs/authConfig';

import classes from './Profile.module.css';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

export const metadata: Metadata = {
  title: 'Profile | A500 Next App',
};

type SessionType = {
  user: {
    name: string;
    email: string;
    image?: string;
  };
};

const Profile: React.FC = async () => {
  const session = (await getServerSession(authConfig as any)) as SessionType;
  console.log('session', session);

  return (
    <div className={classes.container}>
      <h1>{'Profile page'}</h1>
      <div className={classes.userInfoContainer}>
        {session?.user?.image && (
          <div className={classes.imgContainer}>
            <picture>
              <img src={session.user.image} className={classes.userImg} alt={'userImage'} />
            </picture>
          </div>
        )}
        <div className={classes.userTextInfo}>
          <div className={classes.userName}>{session?.user?.name}</div>
          <div className={classes.userEmail}>{session?.user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
