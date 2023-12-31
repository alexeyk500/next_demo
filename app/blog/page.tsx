import React from 'react';

import Posts from '@/components/Posts/Posts';
import PostSearch from '@/components/PostSearch/PostSearch';

import classes from './Blog.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | A500 Next App',
};

const Blog = () => {
  return (
    <div className={classes.container}>
      <h1>{'Blog page'}</h1>
      <PostSearch />
      <Posts />
    </div>
  );
};

export default Blog;
