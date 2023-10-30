import React from 'react';
import { blogData } from '@data/data-content';
import ListItem from '@components/ListItem';

const RecentPosts = () => {
  return (
    <div className="recent-posts--main-container">
        <div className="container recent-posts--inner-container">
            <div className="recent-posts--content-header">
                <h2 className="section-header">Recent Posts</h2>
                <a href="/blog">View all</a>
            </div>        
            <div className="recent-posts--content-container">
                {blogData && blogData.map((item, index) => {
                    if(item.tag === "recent") {
                        return (
                            <ListItem 
                                key={index}
                                props={item}
                            />
                        );
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default RecentPosts
