import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getCommentsById} from '../utils/api'
import Comments from './Comments'
import AddComment from './AddComment'

function CommentsList() {

    const [commentsList,setCommentsList] = useState([])

    const [isLoading,setIsLoading] = useState(true)

    const {id} = useParams()

    const [commentToAdd,setCommentToAdd] = useState()
    const [commentToDelete,setCommentToDelete] = useState()

   

    useEffect(()=>{
      getCommentsById(id)
      .then((res) => {
        setCommentsList(res)
        setIsLoading(false)
      });
    },[id,commentToAdd,commentToDelete])

    const updateDelete = (newCommentToDelete) =>{
      setCommentToDelete(newCommentToDelete)
    }

    if(isLoading){
      return(
        <p>loading</p>
      )
    }else{
      return (
        <>
          <section className='comments_container'>
            
            <div className="comments">
                <ul className="formatted-comments">
                    
                  <p>{commentsList.length} comments</p>
                  <AddComment setCommentToAdd={setCommentToAdd}/>
                  {commentsList.map((comment) => {
                    return (
                        <Comments key = {comment.comment_id} comment = {comment} updateDelete={updateDelete}/>
                    );
                  })}
                </ul>
            </div>
          </section>
        </>
      )
    }
}

export default CommentsList