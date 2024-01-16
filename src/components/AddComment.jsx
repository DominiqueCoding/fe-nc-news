import { useState,useEffect} from 'react'
import { postNewCommentByArticleId } from '../utils/api'
import { useParams } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from '../context/UserContext';

function AddComment({setCommentToAdd}) {

    const {id} = useParams()

    const [comment,setComment] = useState("")
    const [error,setError] = useState()
    const [postComment,setPostComment] = useState()

    const {currentUser} = useContext(UserContext)
    

    function handleCommentChange(commentUpdate){
        setComment(commentUpdate)
    }

    function handleSubmit(){
      if(comment && currentUser){
        setPostComment({
          username: currentUser.username,
          body: comment
        })
      }
      else if(comment){
        alert("please login to comment")
      }
      else{
        alert("comment cannot be empty")
      }
    }
    useEffect(()=>{
      if(postComment){
        postNewCommentByArticleId(id,postComment)
        .then(()=>{
          setCommentToAdd(postComment)
          alert("comment added")
        })
        .catch((err)=>{
            setError(err)
            alert(error.message)
        })
      }
    },[postComment])
    
    
  return (
    <>
      <form 
      
      onSubmit = {(event)=>{
        event.preventDefault()
        handleSubmit()

      }}>
        <div className='flex flex-col gap-2'>
          <textarea
              className="textarea textarea-bordered p-2"
              id="comment"
              type="text"
              name="comment-submit"
              placeholder="write comment"
              onChange={(event) => {
                handleCommentChange(event.target.value);
              }}
          >
          </textarea>

          <button
          className='btn btn-neutral'
          >
              add comment
          </button>
        </div>

      </form>  
    </>
  )
}

export default AddComment