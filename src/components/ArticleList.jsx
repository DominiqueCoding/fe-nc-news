import { useState,useEffect } from 'react'

import Articles from './Articles'

function ArticleList() {

    const [articlesList,setArticlesList] = useState([])

    useEffect(()=>{
      fetch(`https://dom-nc-news-web.onrender.com/api/articles`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setArticlesList(res)
      });
    },[])
  
  return (
    <>
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

export default ArticleList