import React from 'react';
import {Metadata} from "next";
import Link from "next/link";
import classes from './Blog.module.css'

export const metadata: Metadata = {
  title: 'Blog | A500 Next App',
};

const getData = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    next: {
      revalidate: 60
    }
  })
  return response.json()
}

const Blog = async() => {
  const posts = await getData();
  return (
    <div className={classes.container}>
      <h1>
        {'Blog page'}
      </h1>
      <ul className={classes.list}>
        {posts.map((post: any, ind: number)=>{
          return (
            <li key={ind}>
              <Link href={`blog/${post.id}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Blog;