import React from 'react';
import {Metadata} from "next";

type PropsType = {
  params: {
    id: string
  }
}

export const generateMetadata = async ({params: {id}}: PropsType): Promise<Metadata> => {
  return {
    title: `Post ${id} | Blog | A500 Next App`,
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
