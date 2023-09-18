import React, { ChangeEvent, FormEvent, useState } from 'react';

import { PostType } from '@/app/types';
import { getAllPosts } from '@/utils/getAllPosts';

interface IPostSearchProps {
  setPosts: (posts: PostType[]) => void;
}

const PostSearch: React.FC<IPostSearchProps> = ({ setPosts }) => {
  const [searchValue, setSearchValue] = useState('');
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posts = await getAllPosts(searchValue);
    setPosts(posts);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type={'search'} value={searchValue} onChange={changeHandler} />
      <button type={'submit'}>{'Искать'}</button>
    </form>
  );
};

export default PostSearch;
