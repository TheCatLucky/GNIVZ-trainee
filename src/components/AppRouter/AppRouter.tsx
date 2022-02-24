import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Graphic from '../Graphic';
import Home from '../routes/Home';
import Header from './../ui/Header';

const AppRouter: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:view" element={<Home />} />
      <Route path="/post/:view" element={<Home />} />
      <Route path="/graphic" element={<Graphic />} />
    </Routes>
  </>
);

export default AppRouter;
