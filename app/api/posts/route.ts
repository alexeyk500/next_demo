import { posts } from '@/templates/posts';
import { PostType } from '@/types/types';

import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');
  if (query) {
    return NextResponse.json(
      posts.reduce((filteredPosts: PostType[], post) => {
        if (post.body?.toLowerCase().includes(query.toLowerCase())) {
          return filteredPosts.concat(post);
        }
        return filteredPosts;
      }, [])
    );
  }
  return NextResponse.json(posts);
};

export const POST = async (req: Request) => {
  const body = await req.json();
  console.log('body', body);
  return NextResponse.json(body);
};
