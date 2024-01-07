import { useState } from 'react'

function UserProfile({currentUser,setCurrentUser}) {
  
  return (
    <>
    <div className='profile-container'>
        <h1>welcome back {currentUser.name}</h1>

        <h2 className='user-card'>{currentUser.username}</h2>
        <img className='display-profile-img' src={currentUser.avatar_url} alt="a user profle image" />
        
        <button onClick = {()=>{
            if(window.confirm(`sign out?`)){
                setCurrentUser()
            }
        }}>
            sign out
        </button>
    </div>
        
    </>
  )
}

export default UserProfile