import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getArticlesByTopic } from '../utils/api'
import TopicArticles from './TopicArticles'
import Error from './Error'

function TopicSelect() {

    const {topic} = useParams()
    const [topicArticles,setTopicArticles] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const [error,setError] = useState()

    useEffect(()=>{
        getArticlesByTopic(topic)
        .then((res)=>{
            setTopicArticles(res)
            setIsLoading(false)
        })
        .catch((err)=>{
            setError(err)
          })
    },[])

    if(isLoading && !error){
        return(
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
                <h1 className=' card text-xl bg-slate-400 p-3 m-2 w-fit mx-auto'>here is content related to {topic}</h1>

    
                <section>
                    <ul className='formatted-topic-articles'>
                        {topicArticles.map((article)=>{
                            return(
                                <TopicArticles key = {article.article_id} article = {article}/>
                            )
                        })}
    
                    </ul>
                </section>
            </>
        )
    }
}

export default TopicSelect