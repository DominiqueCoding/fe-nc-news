import { useState,useEffect } from 'react'
import DeleteComment from './DeleteComment'
import { getAllUsers } from '../utils/api'

function Comments({comment,updateDelete}) {

  const [userArray,setUserArray] = useState([])
  const [isLoading,setIsLoading] = useState(true)

useEffect(()=>{
  getAllUsers()
  .then((res)=>{
    setUserArray(res)
    setIsLoading(false)
  })
},[])

console.log(userArray)
  return (
    <>
        <div className='card bg-slate-400 shadow-xl m-2 p-2 gap-5'>
            
            <div className='flex flex-row gap-5 text-xs md:text-base'>
              {userArray.map((user) => {
                    console.log(user)
                    if(user.username === comment.author){
                      return (
                        <div className="avatar">
                          <div className="w-10 rounded-full bg-base-100 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.avatar_url} alt="" />
                          </div>
                        </div>
                        
                      )
                    }
              })}

              <p>{comment.author}</p>

              <p>{comment.votes} votes</p>

              <p>{new Date(comment.created_at).toLocaleString()}</p>

            </div>
            
            <article className='bg-white rounded-md p-1'>{comment.body}</article>

            <DeleteComment commentAuthor = {comment.author} comment_id = {comment.comment_id} updateDelete={updateDelete}/> 
        </div>
    </>
  )
}

export default Comments