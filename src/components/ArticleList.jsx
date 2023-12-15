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
      setSortQuery(query)
    }

    function handleOrder(query){
      setOrderQuery(query)
    }

    console.log(sortQuery,"",orderQuery)

    if(isLoading){
      return(
        <p>loading</p>
      )
    }else{
      return (
        <>
          <div className='article-Queries'>
              <select 
              name="sort-query"
              id="sort-query"
              onChange={(event)=>{
                handleSort(event.target.value)
              }}
              >
                <option value="">no sort</option>
                <option value="sort_by=date">sort by date</option>
                <option value="sort_by=comment_count">sort by comment count</option>
                <option value="sort_by=votes">sort by votes</option>
              </select>

              <select 
              name="order-query"
              id="order-query"
              onChange={(event)=>{
                handleOrder(event.target.value)
              }}
              >
                <option value="">default descending sort</option>
                <option value="order=desc">descending order</option>
                <option value="order=asc">accending order</option>  
              </select>
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