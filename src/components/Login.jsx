import { useState,useEffect } from 'react'

import Users from './Users';
import UserProfile from './UserProfile';
import { getAllUsers } from '../utils/api';
import { useContext } from "react";
import { UserContext } from '../context/UserContext';

function Login() {

  const [userArray,setUserArray] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const {currentUser,setCurrentUser} = useContext(UserContext)

  useEffect(()=>{
    getAllUsers()
    .then((res)=>{
      setUserArray(res)
      setIsLoading(false)
    })
  },[])

  const handleUserSelect = (selectedUser)=>{
    if(window.confirm(`sign in as ${selectedUser.username}?`)){
      setCurrentUser(selectedUser)
    }
  }

  if(isLoading){
    return (
      <div className='grid h-screen place-items-center'>
          <p className='loading loading-dots loading-lg scale-[5]'></p>
        </div>
    )
  }else if(currentUser){
    return (
      <>
      <UserProfile currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </>
    )
  }else{
    return (
      <>
        <section className='main_login'>
          <ul className='user-container'>
              {userArray.map((user) => {
                  return (
                  <Users key = {user.username} user = {user}  handleUserSelect = {handleUserSelect}></Users>
                  );
              })}
          </ul>
  
        </section>
      </>
    )
  }

}

export default Login