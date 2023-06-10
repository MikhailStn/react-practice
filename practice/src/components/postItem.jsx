import React from 'react';

export const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>1. {props.post.title}</strong>
        <div>{props.post.body}</div>
        <div className="post__btns">
          <button className="post__btns">Удалить</button>
        </div>
      </div>
    </div>
  );
};
