import React from 'react';
import "./Cards.css";

const Cards = ({image,title,content1,content2}) => {
    return (
        <div className='card'>
            <img src={image} alt=''></img>
            <span>{title}</span>
            <span>
                {content1}
            </span>
            <button className="c-button">Learn More</button>
        </div>
        
    )
}

export default Cards