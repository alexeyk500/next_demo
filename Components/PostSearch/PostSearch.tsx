import React, { ChangeEvent, FormEvent, useState } from 'react';

import { usePosts } from '@/store/store';

import { shallow } from 'zustand/shallow';

const PostSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const getPosts = usePosts((state) => state.getPosts, shallow);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getPosts(searchValue).then();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type={'search'} value={searchValue} onChange={changeHandler} />
      <button type={'submit'}>{'Искать'}</button>
    </form>
  );
};

export default PostSearch;
