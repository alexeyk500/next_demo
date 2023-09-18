'use client';

import React, { useEffect, useState } from 'react';

import { PostType } from '@/app/types';
import Posts from '@/Components/Posts/Posts';
import PostSearch from '@/Components/PostSearch/PostSearch';
import { getAllPosts } from '@/utils/getAllPosts';

import classes from './Blog.module.css';

const Blog = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllPosts()
      .then(setPosts)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes.container}>
      <h1>{'Blog page'}</h1>
      <PostSearch setPosts={setPosts} />
      {isLoading && <h3>Loading...</h3>}
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default Blog;
