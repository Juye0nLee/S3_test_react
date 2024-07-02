import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Post } from './pages/Post';

function App() {
  const ref = useRef(null); // useRef를 올바르게 초기화
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
