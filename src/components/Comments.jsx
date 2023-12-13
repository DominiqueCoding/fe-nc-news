import { useState } from 'react'
import DeleteComment from './DeleteComment'

function Comments(props) {

  // const [userComments,setUserComments] = useState([])


  return (
    <>
        <div className='comment-item'>
            <article>{props.comment.body}</article>
            <p>{props.comment.votes} votes</p>
            <p>{props.comment.author}</p>
            <p>{new Date(props.comment.created_at).toLocaleString()}</p>

            <DeleteComment CommentAuthor = {props.comment.author} comment_id = {props.comment.comment_id}/> 
        </div>
    </>
  )
}

export default Comments