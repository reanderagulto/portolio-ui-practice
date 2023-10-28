import React from 'react';

const ListItem = ({props}) => {
  return (
    <div className="list-item--container">
      {props.image && 
        <div className="list-item--featured-image">
          <img src={props.image} alt={props.title} />
        </div>
      }
      <div className="list-item--content">
        <h3 className="list-item--title">
          {props.title}
        </h3>
        <div className="list-item--subtitle">
          {props.year && <span class="list-item--date-circular">{props.year}</span>}
          {props.fullDate && <span className="list-item--date-normal">{props.fullDate}</span>}
          <div className="list-item--categories">{props.categories.join(', ')}</div>
        </div>
        <p className="list-item--content-snippet">
          {props.snippet}
        </p>
      </div>
    </div>
  )
}

export default ListItem
