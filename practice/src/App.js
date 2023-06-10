import React, { useState } from 'react';
// import { Counter } from './components/Counter';
// import { ClassCounter } from './components/classCounter';
import './styles/app.css';
import { PostItem } from './components/postItem';
import { PostList } from './components/postList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"></input>
        <input type="text" placeholder="Описание поста"></input>
        <button>Добавить</button>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;