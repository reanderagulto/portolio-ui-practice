import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Blog from '@pages/Blog';
import Works from '@pages/Works';
import Contact from '@pages/Contact';
import NotFound from '@pages/404';

const Router = () => {
  return (
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
