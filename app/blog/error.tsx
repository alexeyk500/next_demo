'use client';
import React from 'react';

import classes from './error.module.css';

const ErrorPage = ({ error }: { error: Error }) => {
  console.log('error:', error);
  return <div className={classes.container}>{`Oops!!! ${error.message}`}</div>;
};

export default ErrorPage;
