import { useState } from 'react'
import DeleteComment from './DeleteComment'

function Comments({comment,setCommentToDelete}) {

  return (
    <>
        <div className='comment-item'>
            <article>{comment.body}</article>
            <p>{comment.votes} votes</p>
            <p>{comment.author}</p>
            <p>{new Date(comment.created_at).toLocaleString()}</p>

            <DeleteComment commentAuthor = {comment.author} comment_id = {comment.comment_id} setCommentToDelete={setCommentToDelete}/> 
        </div>
    </>
  )
}

export default Comments