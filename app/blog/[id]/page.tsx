import React from 'react';

import classes from './Post.module.css';
import { Metadata } from 'next';

type PropsType = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: PropsType): Promise<Metadata> => {
  const post = await getPostById(id);
  return {
    title: `${post.title} | Blog | A500 Next App`,
  };
};

const getPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
};

const Post: React.FC<PropsType> = async ({ params: { id } }) => {
  const post = await getPostById(id);
  console.log('post', post);

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>{'Post'}</h2>
      <h3 className={classes.title}>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
