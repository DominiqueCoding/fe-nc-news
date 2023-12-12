function getArticles(searchquery = "articles"){
    return fetch(`https://dom-nc-news-web.onrender.com/api/${searchquery}`)
    .then((data) => {
      return data.json();
    })
}

export default getArticles