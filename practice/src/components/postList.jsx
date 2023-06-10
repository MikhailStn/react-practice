import React from 'react';
import { PostItem } from './postItem';

export const PostList = ({posts, title}) => {
  return (
    <div className="">
      <h1 className='post__title'>{title}</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};
