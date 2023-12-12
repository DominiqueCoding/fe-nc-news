import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getArticles} from '../utils/api'
import CommentsList from './CommentsList'


function ArticleSelect() {

  const [currentArticle, setCurrentArticle] = useState()
  const [isLoading, setIsLoading] = useState(true)
 

  const {id} = useParams()
  
  useEffect(()=>{
    getArticles(id)
    .then((res) => {
      setCurrentArticle(res)
      setIsLoading(false)
    });
  },[id])

  if(isLoading){
    return (
      <p>loading</p>
    )
  }else{
    return (
      <>
          <section className='selected-article'>
  
            <h1>{currentArticle.title}</h1>
  
            <img src={currentArticle.article_img_url} alt="an article image" />
  
            <article>{currentArticle.body}</article>
  
            <p>{currentArticle.author}</p>
  
            <p>{currentArticle.votes} votes</p>
  
            <p>{currentArticle.topic}</p>
  
            <p>{new Date(currentArticle.created_at).toLocaleString()}</p>

            <CommentsList/>

          </section>
      </>
    )
  }
  
}

export default ArticleSelect