import { useState,useEffect } from 'react'

import Users from './Users';
import { getAllUsers } from '../utils/api';
import { useContext } from "react";
import { UserContext } from '../context/UserContext';

function Login() {

  const [userArray,setUserArray] = useState([])
  const [selectedUser,setSelectedUser] = useState("")

  const [isLoading,setIsLoading] = useState(true)
  
  const {currentUser,setCurrentUser} = useContext(UserContext)

  useEffect(()=>{
    getAllUsers()
    .then((res)=>{
      setUserArray(res)
      setIsLoading(false)
    })
  },[])

  if(isLoading){
    return (
      <p>loading</p>
    )
  }else if(currentUser){
    return (
      <>
      <h1>welcome back {currentUser.name}</h1>

      <h2 className='show name'>{currentUser.username}</h2>
      <img src={currentUser.avatar_url} alt="a user profle image" />
      
      <button onClick = {()=>{
        setCurrentUser()
      }}>
        sign out
      </button>
      </>
    )
  }else{
    return (
      <>
        <section className='main_login'>
          <ul className='login_list'>
              <button onClick = {()=>{
                setCurrentUser(selectedUser)
              }}>login</button>
              <button>Sign-up</button>
          </ul>
          
          <ul>
              {userArray.map((user) => {
                  return (
                  <Users key = {user.username} user = {user}  setSelectedUser = {setSelectedUser}></Users>
                  );
              })}
          </ul>
  
        </section>
      </>
    )
  }

}

export default Login