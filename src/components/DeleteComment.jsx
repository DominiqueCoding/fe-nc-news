import { deleteCommentByCommentId } from '../utils/api'
import { useState,useEffect } from 'react';

import { useContext } from "react";
import { UserContext } from '../context/UserContext';

function DeleteComment(props) {

    const [error,setError] = useState()
    const [commentToDelete,setCommentToDelete] = useState()

    const {currentUser} = useContext(UserContext)

    function handleCommentDelete(){
        setCommentToDelete(props.comment_id)
    }

    useEffect(()=>{
        if(commentToDelete){
            deleteCommentByCommentId(commentToDelete)
            .then(()=>{
                alert("comment deleted")
                props.updateDelete(commentToDelete)
            })
            .catch((err)=>{
                setError(err)
                alert(error.message) 
            }) 
        }
    },[commentToDelete])

    if(currentUser){
        if(props.commentAuthor === currentUser.username){
            return (
                <>  
                    <button 
                        className='btn btn-neutral'
                    onClick = {()=>{
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

}

export default DeleteComment