import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Blog | A500 Next App',
}

const Blog = () => {
  return (
    <h1>
      {'Blog page'}
    </h1>
  );
};

export default Blog;
