import React from 'react';
import classes from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={classes.container}>
      <div>
        {`created by \u00a9A500`}
      </div>
      <div>
        {'all rights reserved'}
      </div>
    </footer>
  );
};

export default Footer;
