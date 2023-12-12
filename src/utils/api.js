function getArticles(searchquery){

    if(searchquery){
      return fetch(`https://dom-nc-news-web.onrender.com/api/articles/${searchquery}`)
      .then((data) => {
        return data.json();
      })
    }else{
      return fetch(`https://dom-nc-news-web.onrender.com/api/articles`)
      .then((data) => {
        return data.json();
      })
    }
    
}

function getCommentsById(id){
  return fetch(`https://dom-nc-news-web.onrender.com/api/articles/${id}/comments`)
    .then((data) => {
      return data.json();
    })
}


export{
    getArticles,
    getCommentsById,
}


    
// export default getArticles