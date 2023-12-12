import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getArticles} from '../utils/api'
import CommentsList from './CommentsList'
import ArticleVoteButton from './ArticleVoteButton'


function ArticleSelect() {

  const [currentArticle, setCurrentArticle] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [votes,setVotes] = useState()
 
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
  
            <p>{currentArticle.topic}</p>
  
            <p>{new Date(currentArticle.created_at).toLocaleString()}</p>

            {/* <p>{currentArticle.votes} votes</p> */}

            <ArticleVoteButton votes = {votes} setVotes = {setVotes} votesLocal = {currentArticle.votes}/>

            <CommentsList/>

          </section>
      </>
    )
  }
  
}

export default ArticleSelect