import React from 'react'
import './NewsCard.css';
const NewsCard = (props) => {
    return (
        <div className="newsCard">
            <h1 className="title">Title :{props.title}</h1>
            <p>{props.summary}</p>
            <h3>Author :{props.author}</h3>
        </div>
    )
}

export default NewsCard
