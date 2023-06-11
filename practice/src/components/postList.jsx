import React from 'react';
import { PostItem } from './postItem';

export const PostList = ({posts, title, remove}) => {
  return (
    <div className="">
      <h1 className='post__title'>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};
