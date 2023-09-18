import React from 'react';

import { PostType } from '@/app/types';

import classes from './Posts.module.css';
import Link from 'next/link';

interface IPostsProps {
  posts: PostType[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  return (
    <>
      <ul className={classes.list}>
        {posts.map((post: { id: string; title: string }, ind: number) => {
          return (
            <li key={ind}>
              <Link href={`blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;
