import { useState } from 'react'

function Articles(props) {
  
  return (
    <>
        <div className='article-card'>
            <h3 className='article-name'>{props.article.title}</h3>
            <img className='article-img' src={props.article.article_img_url} alt="" />

            <div className='article-content'>
                
                <p>by {props.article.author}</p>

                <p>{new Date(props.article.created_at).toLocaleString()}</p>

                <p>{props.article.comment_count} comments</p>

                <p>{props.article.topic}</p>

                <p>{props.article.votes} votes</p>


            </div>
        </div>
    </>
  )
}

export default Articles