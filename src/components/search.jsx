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
        <p>loading</p>
    )
  }else{
    return (
      <>
       <section>
          <form>
              <label htmlFor=""></label>
              <input 
                  type="text" 
                  name="searchbar" 
                  id="search" 
                  placeholder="search" 
                  onChange = {(event)=>{
                      console.log(event.target.value)
                  }}
                  >
              </input>
          </form>
          
          <ul className="formatted-Topics">
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