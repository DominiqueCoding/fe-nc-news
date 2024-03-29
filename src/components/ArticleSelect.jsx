import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getArticles,patchArticleVotesById} from '../utils/api'
import CommentsList from './CommentsList'
import ArticleVoteButton from './ArticleVoteButton'
import Error from './Error'

import { useContext } from "react";
import { UserContext } from '../context/UserContext';


function ArticleSelect() {

  const [currentArticle, setCurrentArticle] = useState()
  const [isLoading, setIsLoading] = useState(true)
  

  const [error,setError] = useState()
 
  const {id} = useParams()

  const [voteUpdate, setVoteUpdate] = useState({inc_votes: 0})

  const {currentUser} = useContext(UserContext)
  
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
      <div className='grid h-screen place-items-center'>
          <p className='loading loading-dots loading-lg scale-[5]'></p>
        </div>
    )
  }
  else if(error){
    return <Error message = {error.message}/>
  }
  else{
    
    return (
      <>  
          <section className='card bg-base-100 shadow-xl m-2'>
            <figure><img className='h-full w-full' src={currentArticle.article_img_url} alt="" /></figure>

            <div className="card-body rounded-b-lg bg-slate-400 p-2">
              
              <div className='absolute top-3 left-3 right-3'>
                <h2 className="card-title text-sm text-gray-800 bg-white bg-opacity-75 p-4 rounded-lg w-fit sm:text-2xl md:text-6xl">{currentArticle.title}</h2>
              </div>

              
                <div className='card-title text-xs text-gray-800 bg-white bg-opacity-75 p-4 rounded-lg w-fit flex flex-col xs:flex-row sm:text-xl md:text-2xl gap-3 mx-auto md:gap-10'>
                    <p>{currentArticle.author}</p>
                    <p>{new Date(currentArticle.created_at).toLocaleString()}</p>
                    <p>{currentArticle.votes} votes</p>
                    <p>{currentArticle.topic}</p>
                </div>

                
                {currentUser && <div className='flex flex-row gap-2 w-fit mx-auto'>
                  <ArticleVoteButton handleVoteChange={handleVoteChange}/>
                </div>}
                

              

            
              <article>{currentArticle.body}</article>
    
    
              

              
    

              
              
            
            </div>
  
  
          </section>

          <CommentsList/>
      </>
    )
  }
  
}

export default ArticleSelect