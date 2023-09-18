import { PostType } from '@/app/types';

export const getAllPosts = async (search?: string): Promise<PostType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts${search ? `?q=${search}` : ''}`);
  return response.json();
};
