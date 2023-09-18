'use client';

import React, { useEffect } from 'react';

import Posts from '@/Components/Posts/Posts';
import PostSearch from '@/Components/PostSearch/PostSearch';
import { usePosts } from '@/store/store';

import classes from './Blog.module.css';
import { shallow } from 'zustand/shallow';

const Blog = () => {
  const posts = usePosts((state) => state.posts, shallow);
  const isLoading = usePosts((state) => state.isLoading, shallow);
  const getPosts = usePosts((state) => state.getPosts, shallow);

  useEffect(() => {
    getPosts().then();
  }, [getPosts]);

  return (
    <div className={classes.container}>
      <h1>{'Blog page'}</h1>
      <PostSearch />
      {isLoading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </div>
  );
};

export default Blog;
