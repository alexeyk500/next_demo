import { PostType } from '@/app/types';
import { getAllPosts } from '@/utils/getAllPosts';

import { create } from 'zustand';

type UsePostsType = {
  posts: PostType[];
  isLoading: boolean;
  getPosts: (searchValue?: string) => Promise<void>;
};

export const usePosts = create<UsePostsType>()((set) => ({
  posts: [],
  isLoading: false,
  getPosts: async (searchValue?: string) => {
    set({ isLoading: true });
    const posts = await getAllPosts(searchValue);
    set({ posts, isLoading: false });
  },
}));
