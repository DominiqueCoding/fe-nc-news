function getArticles(searchquery){

    if(searchquery){
      return fetch(`https://dom-nc-news-web.onrender.com/api/articles/${searchquery}`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"article not found"})
        }else{
          return data.json();
        }
      })
     
    }else{
      return fetch(`https://dom-nc-news-web.onrender.com/api/articles`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"not found"})
        }else{
          return data.json();
        }
      })
      
    }
    
}

function getCommentsById(id){
  return fetch(`https://dom-nc-news-web.onrender.com/api/articles/${id}/comments`)
    .then((data) => {
      if(!data.ok){
        return Promise.reject({error:data.status,message:"not found"})
      }else{
        return data.json();
      }
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
      if(!data.ok){
        return Promise.reject({error:data.status,message:"not found"})
      }else{
        return data.json();
      }
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
      if(!data.ok){
        return Promise.reject({error:data.status,message:"Failed to add Comment"})
      }else{
        return data.json();
      }
    })
    
}

function getAllUsers(){
  return fetch(`https://dom-nc-news-web.onrender.com/api/users`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"not found"})
        }else{
          return data.json();
        }
      })
      
}

function deleteCommentByCommentId(id){
  return fetch(`https://dom-nc-news-web.onrender.com/api/comments/${id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((data) => {
    if(!data.ok){
      return Promise.reject({error:data.status,message:"delete failed"})
    }else{
      return data;
    }
  })
}

function getAllTopics(){
  return fetch(`https://dom-nc-news-web.onrender.com/api/topics`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"not found"})
        }else{
          return data.json();
        }
      })
      
}

function getArticlesByTopic(topic){
  return fetch(`https://dom-nc-news-web.onrender.com/api/articles?topic=${topic}`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"topic not found"})
        }else{
          return data.json();
        }
      })
      
}

function getAndSortAllArticles(sortQuery,orderQuery){
  if(sortQuery && orderQuery){
    return fetch(`https://dom-nc-news-web.onrender.com/api/articles?${sortQuery}&&${orderQuery}`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"sort failed"})
        }else{
          return data.json();
        }
      })
  }else if(orderQuery){
    return fetch(`https://dom-nc-news-web.onrender.com/api/articles?${orderquery}`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"order failer"})
        }else{
          return data.json();
        }
      })
  }else if(sortQuery){
    return fetch(`https://dom-nc-news-web.onrender.com/api/articles?${sortQuery}`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"order failer"})
        }else{
          return data.json();
        }
      })
  }else{
    return fetch(`https://dom-nc-news-web.onrender.com/api/articles`)
      .then((data) => {
        if(!data.ok){
          return Promise.reject({error:data.status,message:"order failer"})
        }else{
          return data.json();
        }
      })
  }
}

export{
    getArticles,
    getCommentsById,
    patchArticleVotesById,
    postNewCommentByArticleId,
    getAllUsers,
    deleteCommentByCommentId,
    getAllTopics,
    getArticlesByTopic,
    getAndSortAllArticles,
}


    
// export default getArticles