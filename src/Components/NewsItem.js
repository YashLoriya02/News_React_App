import React, { Component } from 'react'

const NewsItem = (props) => {
        let {title,description, imageUrl, newsUrl, publishedAt, author } = props;
        return (
            <div className='container my-3'>
                <div className="card" id='title_change2' style={{
                    width: "18rem", 
            }} >
                    <img src= {!imageUrl?"https://thumbs.dreamstime.com/b/news-headlines-background-earth-planet-news-headlines-background-earth-planet-illustration-111776074.jpg":imageUrl} className="card-img-top" alt='' />
                    <div className="card-body text-center" >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='time' > By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()} </p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-info">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem