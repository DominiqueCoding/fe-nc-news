import { useState,useEffect } from 'react'

import Articles from './Articles'


const fakeArticles = [
    {
      "article_id": 1,
      "title": "fake title",
      "topic": "mitch",
      "author": "icellusedkars",
      "body": "some gifs",
      "created_at": "2020-11-03T09:12:00.000Z",
      "votes": 5,
      "article_img_url": "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700"
    },
    {
        "article_id": 2,
        "title": "fake title",
        "topic": "mitch",
        "author": "icellusedkars",
        "body": "some gifs",
        "created_at": "2020-11-03T09:12:00.000Z",
        "votes": 5,
        "article_img_url": "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700"
    },
    {
        "article_id": 3,
        "title": "fake title",
        "topic": "mitch",
        "author": "icellusedkars",
        "body": "some gifs",
        "created_at": "2020-11-03T09:12:00.000Z",
        "votes": 5,
        "article_img_url": "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700"
    },

]



function ArticleList() {

    const [articlesList,setArticlesList] = useState([])
  
  return (
    <>
      <section className='article_container'>
        <div className="articles">
            <ul className="formatted-articles">

              {fakeArticles.map((article) => {

          
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