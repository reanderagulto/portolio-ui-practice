import React from 'react';
import { blogData } from '@data/data-content';
import ListItem from '@components/ListItem';

const BlogList = () => {
  return (
    <div className="container blog-list--main-container">
        <div className="blog-list--content-container">
            {blogData && blogData.map((item, index) => {
                return (
                    <ListItem 
                        key={index}
                        props={item}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default BlogList
