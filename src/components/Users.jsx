import { useState } from 'react'

function Users({user,setSelectedUser}) {
  
  return (
    <>
        <div className='user-item'>
            <h3>{user.username}</h3>
            <img src={user.avatar_url} alt="a user profle image" />
            <button
              onClick = {()=>{
                setSelectedUser({
                  username: user.username,
                  name: user.name,
                  avatar_url: user.avatar_url
                })
              }}
            >select
            </button>
        </div>
    </>
  )
}

export default Users