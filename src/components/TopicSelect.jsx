import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getArticlesByTopic } from '../utils/api'
import TopicArticles from './TopicArticles'

function TopicSelect() {

    const {topic} = useParams()
    const [topicArticles,setTopicArticles] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        getArticlesByTopic(topic)
        .then((res)=>{
            setTopicArticles(res)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return(
            <p>loading</p>
        )
    }else{
        return (
            <>
                <h1>here is content related to {topic}</h1>
    
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