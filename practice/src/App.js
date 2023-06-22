import React, { useState, useRef, useMemo } from "react";
// import { Counter } from './components/Counter';
// import { ClassCounter } from './components/classCounter';
import "./styles/app.css";
// import { PostItem } from './components/postItem';
import { PostList } from "./components/postList";
// import { MyButton } from "./components/UI/button/MyButton";
// import { MyInput } from "./components/UI/input/MyInput";
import { PostForm } from "./components/postForm";
import { MySelect } from "./components/UI/select/MySelect";
import { MyInput } from "./components/UI/input/MyInput";
import { PostFilter } from "./components/postFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Aasdasd", body: "Hdfgsfg" },
    { id: 2, title: "Vhfgjghj 2", body: "asdasdasd" },
    { id: 3, title: "Wrtety 3", body: "egdfhdgh" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr className="app__separator"></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedPost.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPost}
          title="Посты про JS"
        />
      ) : (
        <h1 className="app__subtitle">Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
