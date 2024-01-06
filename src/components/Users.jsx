import { useState } from 'react'

function Users({user,handleUserSelect}) {
  
  return (
    <>
        <div className='user-item'
          onClick = {()=>{
            handleUserSelect({
              username: user.username,
              name: user.name,
              avatar_url: user.avatar_url
            })
          }}
        >
            <h3>{user.username}</h3>
            <img className='profile-img' src={user.avatar_url} alt="a user profle image" />
        </div>
    </>
  )
}

export default Users