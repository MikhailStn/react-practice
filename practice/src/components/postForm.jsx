import React, { useState, useRef } from "react";
import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  }

  return (
    <form>
      {/* Управляемый */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      ></MyInput>
      {/* Неуправляемый
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста"
        ></MyInput> */}
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      ></MyInput>
      <MyButton onClick={addNewPost}>Добавить</MyButton>
    </form>
  );
};
