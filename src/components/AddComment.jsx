import { useState,useEffect } from 'react'
import { postNewCommentByArticleId } from '../utils/api'
import { useParams } from 'react-router-dom'

import { useContext } from "react";
import { UserContext } from '../context/UserContext';

function AddComment(props) {

    const {id} = useParams()

    const [comment,setComment] = useState("")
    
    const [currentUser] = useContext(UserContext)

    function handleCommentChange(commentUpdate){
        setComment(commentUpdate)
    }

    function handleSubmit(){
        console.log(comment)

        if(currentUser && comment){
            const postComment = {
                username: currentUser.username,
                body: comment
            }

            postNewCommentByArticleId(id,postComment)

            alert(`comment added as ${currentUser.username}`)
        }else if(currentUser && !comment){
            alert("comment can not be empty")
        }else{
            alert("please Login to add a comment")
        }
    }

  return (
    <>
      <form onSubmit = {(event)=>{
        event.preventDefault()
        handleSubmit()

      }}>
        <label htmlFor= "comment-submit">
            write a comment?
            <input
                id="comment"
                type="text"
                name="comment-submit"
                placeholder="write comment"
                onChange={(event) => {
                  handleCommentChange(event.target.value);
                }}
            >
            </input>
        </label>
        <button>
            add comment
        </button>
      </form>  
    </>
  )
}

export default AddComment