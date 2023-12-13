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

function patchArticleVotesById(id,updatedVote){
  return fetch(`https://dom-nc-news-web.onrender.com/api/articles/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedVote),
  })
    .then((data) => {
      return data.json();
    })
}

function postNewCommentByArticleId(id,newComment){
  return fetch(`https://dom-nc-news-web.onrender.com/api/articles/${id}/comments`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  })
    .then((data) => {
      return data.json();
    })
}

function getAllUsers(){
  return fetch(`https://dom-nc-news-web.onrender.com/api/users`)
      .then((data) => {
        return data.json();
      })
}

function deleteCommentByCommentId(id){
  return fetch(`https://dom-nc-news-web.onrender.com/api/comments/${id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   comment_id,
    //   body,
    //   votes,
    //   author,
    //   article_id,
    //   created_at
    // }),
  })
    .then((data) => {
      return
    })
    .catch((err)=>{
      console.log(err)
    })
}

export{
    getArticles,
    getCommentsById,
    patchArticleVotesById,
    postNewCommentByArticleId,
    getAllUsers,
    deleteCommentByCommentId,
}


    
// export default getArticles