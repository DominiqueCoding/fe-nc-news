import { useState,useEffect } from 'react'
import { getAllTopics } from '../utils/api'
import Topics from './Topics'

function Search() {

  const [topicArray,setTopicArray] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    getAllTopics()
    .then((res)=>{
      setTopicArray(res)
      setIsLoading(false)
    })
  },[])

  if(isLoading){
    return (
      <div className='grid h-screen place-items-center'>
          <p className='loading loading-dots loading-lg scale-[5]'></p>
        </div>
    )
  }else{
    return (
      <>
       <section>
          <ul className="topic-container">
            {topicArray.map((topic)=>{
              return(
                <Topics key = {topic.slug} topic = {topic}/>
              )
            })}
          </ul>
          
       </section> 
      </>
    )

  }
  
}

export default Search