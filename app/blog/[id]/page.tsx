import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Post | Blog | A500 Next App',
}

type PropsType = {
  params: {
    id: string
  }
}

const Post: React.FC <PropsType>= ({params: {id}}) => {
  return (
    <h1>
      {`Post with id:${id}`}
    </h1>
  );
};

export default Post;
