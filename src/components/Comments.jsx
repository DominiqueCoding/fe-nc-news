import { useState } from 'react'

function Comments(props) {

  return (
    <>
        <div className='comment-item'>
            <article>{props.comment.body}</article>
            <p>{props.comment.votes} votes</p>
            <p>{props.comment.author}</p>
            <p>{new Date(props.comment.created_at).toLocaleString()}</p>
        </div>
    </>
  )
}

export default Comments