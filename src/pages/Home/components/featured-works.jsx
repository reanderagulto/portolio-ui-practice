import React from 'react';
import { worksData } from '@data/data-content';
import ListItem from '@components/ListItem';

const FeaturedWorks = () => {
    return (
    <div className="container featured-works--main-container">
        <h2 className="section-header">Featured Works</h2>
        <div className="featured-works--content-container">
            {worksData && worksData.map((item, index) => {
                if(index <= 2) {
                    return (
                        <ListItem 
                            key={index}
                            props={item}
                        />
                    )
                }
            })}
        </div>
    </div>
    )
}

export default FeaturedWorks
