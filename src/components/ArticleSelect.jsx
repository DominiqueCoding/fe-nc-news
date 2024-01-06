import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getArticles,patchArticleVotesById} from '../utils/api'
import CommentsList from './CommentsList'
import ArticleVoteButton from './ArticleVoteButton'
import Error from './Error'


function ArticleSelect() {

  const [currentArticle, setCurrentArticle] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [votes,setVotes] = useState()

  const [error,setError] = useState()
 
  const {id} = useParams()

  const [voteUpdate, setVoteUpdate] = useState({inc_votes: 0})
  
  useEffect(()=>{
    getArticles(id)
    patchArticleVotesById(id,voteUpdate)
    .then((res) => {
      setCurrentArticle(res)
      setIsLoading(false)
    })
    .catch((err)=>{
      setError(err)
    })
  },[id,voteUpdate])

  const handleVoteChange = (voteChange) =>{
    setVoteUpdate(voteChange)
  }

  if(isLoading && !error){
    return (
      <p>loading</p>
    )
  }
  else if(error){
    return <Error message = {error.message}/>
  }
  else{
    
    return (
      <>
          <section className='selected-article'>
  
            <h1>{currentArticle.title}</h1>
  
            <img src={currentArticle.article_img_url} alt="an article image" />
  
            <article>{currentArticle.body}</article>
  
            <p>{currentArticle.author}</p>
  
            <p>{currentArticle.topic}</p>
  
            <p>{new Date(currentArticle.created_at).toLocaleString()}</p>

            <p>{currentArticle.votes} votes</p>

            <ArticleVoteButton handleVoteChange={handleVoteChange}/>

            <CommentsList/>

          </section>
      </>
    )
  }
  
}

export default ArticleSelect