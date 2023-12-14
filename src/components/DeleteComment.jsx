import { deleteCommentByCommentId } from '../utils/api'
import { useState,useEffect } from 'react';

function DeleteComment(props) {

    const [error,setError] = useState()
    const [commentToDelete,setCommentToDelete] = useState()

    function handleCommentDelete(){
        setCommentToDelete(props.comment_id)
    }

    useEffect(()=>{
        if(commentToDelete){
            deleteCommentByCommentId(commentToDelete)
            .then(()=>{
                alert("comment deleted")
                window.location.reload();
            })
            .catch((err)=>{
                setError(err)
            }) 
        }
    },[commentToDelete])

    if(error){
        alert(error.message)
        window.location.reload();       
    }

    if(props.commentAuthor === "grumpy19"){
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
    }
}

export default DeleteComment