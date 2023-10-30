import React from 'react';
import { worksData } from '@data/data-content';
import ListItem from '@components/ListItem';

const WorksList = () => {
  return (
    <div className="container works-list--main-container">
        <div className="works-list--content-container">
            {worksData && worksData.map((item, index) => {
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

export default WorksList
