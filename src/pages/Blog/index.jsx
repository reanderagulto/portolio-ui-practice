import React from 'react';
import BlogHeader from './components/blog-header';
import BlogList from './components/blog-list';

const Blog = () => {
  return (
    <section className="blog-main">
      <BlogHeader />        
      <BlogList />
    </section>
  )
}

export default Blog
