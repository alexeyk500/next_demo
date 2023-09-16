import React from 'react';

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
