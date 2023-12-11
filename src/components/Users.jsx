import { useState } from 'react'

function Users(props) {
  
  return (
    <>
        <div className='user-item'>
            <h3 className='show name'>{props.user.username}</h3>
        </div>
    </>
  )
}

export default Users