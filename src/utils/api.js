function getArticles(){
    return fetch(`https://dom-nc-news-web.onrender.com/api/articles`)
    .then((data) => {
      return data.json();
    })
}

export default getArticles