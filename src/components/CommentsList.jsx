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
                <ul className="">
                    
                  <div className='card bg-indigo-400 shadow-xl m-2 p-2'>
                    <h2 className="text-xl">
                      {commentsList.length} comments
                    </h2>
                    <AddComment setCommentToAdd={setCommentToAdd}/>
                  </div>

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