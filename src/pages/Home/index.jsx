import React from 'react';
import HeroSection from './components/hero-section';
import RecentPosts from './components/recent-posts';
import FeaturedWorks from './components/featured-works';

const index = () => {
  return (
    <section>
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </section>
  )
}

export default index
