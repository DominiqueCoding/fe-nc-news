import { useState,useEffect } from 'react'

import Articles from './Articles'
import {getAndSortAllArticles} from '../utils/api'

function ArticleList() {

    const [articlesList,setArticlesList] = useState([])

    const [isLoading,setIsLoading] = useState(true)

    const [isError,setIsError] = useState(false)

    const [sortQuery, setSortQuery] = useState("")
    const [orderQuery, setOrderQuery] = useState("")

    useEffect(()=>{
      getAndSortAllArticles(sortQuery,orderQuery)
      .then((res) => {
        setArticlesList(res)
        setIsLoading(false)
      })
      .catch((err)=>{
        setIsError({err})
        console.log(isError,"error")
      })
    },[sortQuery,orderQuery])

    function handleSort(query){
      if(query === "all"){
        setSortQuery()
        setOrderQuery()
      }
      else{
        setSortQuery(query)
      }
    }

    function handleOrder(query){
      setOrderQuery(query)
    }

    if(isLoading){
      return(
        <div className='grid h-screen place-items-center'>
          <p className='loading loading-dots loading-lg scale-[5]'></p>
        </div>
      )
    }else{
      return (
        <>
          <div className='article-Queries p-2 '>
            <div className="join join-vertical sm:join-horizontal">
              
              <select
                className="select select-bordered join-item bg-indigo-300 "
                name="sort-query"
                id="sort-query"
                onChange={(event)=>{
                  handleSort(event.target.value)

                }}
              >
                <option value="all">show all</option>
                <option value="sort_by=created_at">sort by date</option>
                <option value="sort_by=comment_count">sort by comment count</option>
                <option value="sort_by=votes">sort by votes</option>
              </select>

              {sortQuery && <select
                className="select select-bordered join-item bg-indigo-300" 
                name="order-query"
                id="order-query"
                onChange={(event)=>{
                  handleOrder(event.target.value)
              }}
              >
                <option value="order=desc">descending order</option>
                <option value="order=asc">accending order</option>  
              </select>}

              
            </div>
          </div>
          

          <section className='article_container'>
            <div className="articles">
                <ul className="formatted-articles">
    
                  {articlesList.map((article) => {
                    return (
                      <Articles key={article.article_id} article = {article}></Articles>
                    );
                  })}
                </ul>
            </div>
          </section>
        </>
      )
    }
}

export default ArticleList