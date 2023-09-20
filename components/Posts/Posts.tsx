'use client';

import React, { useEffect } from 'react';

import { usePosts } from '@/store/store';

import classes from './Posts.module.css';
import Link from 'next/link';
import { shallow } from 'zustand/shallow';

const Posts: React.FC = () => {
  const posts = usePosts((state) => state.posts, shallow);
  const isLoading = usePosts((state) => state.isLoading, shallow);
  const getPosts = usePosts((state) => state.getPosts, shallow);

  useEffect(() => {
    getPosts().then();
  }, [getPosts]);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul className={classes.list}>
          {posts.map((post, ind: number) => {
            return (
              <li key={ind}>
                <Link href={`blog/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Posts;
