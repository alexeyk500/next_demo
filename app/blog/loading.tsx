import React from 'react';
import classes from './loading.module.css'

const LoadingPage: React.FC = () => {
  return (
    <div className={classes.container}>
      {'Loading...'}
    </div>
  );
};

export default LoadingPage;
