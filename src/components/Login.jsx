import { useState } from 'react'

import Users from './Users';

const fakeUsers = [
    {
      "username": "fake user 1",
      "name": "jonny",
      "avatar_url": "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg"
    },
    {
      "username": "fake user 2",
      "name": "sam",
      "avatar_url": "https://avatars2.githubusercontent.com/u/24604688?s=460&v=4"
    },
  ]

function Login() {
  
  return (
    <>
      <section className='main_login'>
        <ul className='login_list'>
            <button>login</button>
            <button>Sign-up</button>
        </ul>
        
        <ul>
            {fakeUsers.map((user) => {
                return (
                // <Articles key={article.article_id} article = {article}></Articles>

                <Users key = {user.username} user = {user}></Users>
                );
            })}
        </ul>


      </section>
    </>
  )
}

export default Login