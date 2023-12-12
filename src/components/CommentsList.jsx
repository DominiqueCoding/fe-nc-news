import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getArticles from '../utils/api'
import Comments from './Comments'

function CommentsList() {

    const [commentsList,setCommentsList] = useState([])

    const [isLoading,setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
      getArticles(id + "/comments")
      .then((res) => {
        setCommentsList(res)
        setIsLoading(false)
      });
    },[id])

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
                  {commentsList.map((comment) => {
                    return (
                        <Comments key = {comment.comment_id} comment = {comment}></Comments>
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