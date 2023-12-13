import { useState} from 'react'
import { postNewCommentByArticleId } from '../utils/api'
import { useParams } from 'react-router-dom'

function AddComment(props) {

    const {id} = useParams()

    const [comment,setComment] = useState("")
    

    function handleCommentChange(commentUpdate){
        setComment(commentUpdate)
    }

    function handleSubmit(){
        console.log(comment)

        if(comment){
            const postComment = {
                username: "grumpy19",
                body: comment
            }

            postNewCommentByArticleId(id,postComment)

            alert(`comment added as grumpy19`)
        }else{
            alert("comment can not be empty")
        }
    }

  return (
    <>
      <form onSubmit = {(event)=>{
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