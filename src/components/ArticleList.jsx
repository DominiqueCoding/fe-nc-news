import { useState,useEffect } from 'react'

import Articles from './Articles'
import {getArticles} from '../utils/api'

function ArticleList() {

    const [articlesList,setArticlesList] = useState([])

    const [isLoading,setIsLoading] = useState(true)

    const [isError,setIsError] = useState(false)

    useEffect(()=>{
      getArticles()
      .then((res) => {
        setArticlesList(res)
        setIsLoading(false)
      })
      .catch((err)=>{
        setIsError({err})
        console.log(isError,"error")
      })
    },[])

    if(isLoading){
      return(
        <p>loading</p>
      )
    }else{
      return (
        <>
          {}
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