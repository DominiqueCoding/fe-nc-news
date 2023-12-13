import { useState} from 'react'
import { deleteCommentByCommentId } from '../utils/api'

function DeleteComment(props) {
    function handleCommentDelete(){  
     deleteCommentByCommentId(props.comment_id)
     .then(()=>{
        window.location.reload();
     })  
    }

    if(props.CommentAuthor === "grumpy19"){
        return (
            <>
                <button onClick = {()=>{
                    if(window.confirm("delete this comment?")){
                        handleCommentDelete()
                    }
                }}>
                    delete comment
                </button>
            </>
          )
    }else{
        return 
    }

  
}

export default DeleteComment