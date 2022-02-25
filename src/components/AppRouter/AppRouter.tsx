import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../About';
import Home from '../routes/Home';
import PostItem from '../routes/PostItem';
import Header from './../ui/Header';

const AppRouter: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:view" element={<Home />} />
      <Route path="/post/:view" element={<Home />} />
      <Route path="/posts/:userId" element={<PostItem />} />
      <Route path="/post/*" element={<div>Error</div>} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default AppRouter;
