import { useState } from 'react'

function Articles(props) {
  
  return (
    <>
        <div className='article-item'>
            <h3 className='show name'>{props.article.title}</h3>
        </div>
    </>
  )
}

export default Articles