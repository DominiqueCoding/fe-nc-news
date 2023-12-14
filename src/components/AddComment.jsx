import { useState,useEffect} from 'react'
import { postNewCommentByArticleId } from '../utils/api'
import { useParams } from 'react-router-dom'

function AddComment(props) {

    const {id} = useParams()

    const [comment,setComment] = useState("")
    const [error,setError] = useState()
    const [postComment,setPostComment] = useState()
    

    function handleCommentChange(commentUpdate){
        setComment(commentUpdate)
    }

    function handleSubmit(){
      if(comment){
        setPostComment({
          username: "grumpy19",
          body: comment
        })
      }
      else{
        alert("comment can not be empty")
      }
    }

    useEffect(()=>{
      if(postComment){
        postNewCommentByArticleId(id,postComment)
        .then(()=>{
          alert("comment added")
          window.location.reload();
      })
      .catch((err)=>{
          setError(err)
      })
      }
    },[postComment])

    if(error){
      alert(error.message)
      window.location.reload();       
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