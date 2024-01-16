import { useState } from 'react'
import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from '../context/UserContext';

function Header() {
  const {currentUser} = useContext(UserContext)

  return (
    <>
      <header className='bg-indigo-300'>
        <h1 className='text-xl'>NC News</h1>
        <h2>get the latest news here!</h2>

        <nav className='main_navBar p-2'>
            <ul className='join'>
                <li>
                    <Link to = "/login">
                        <button className='btn btn-primary join-item w-30 no-animation sm:w-40 '>{currentUser? currentUser.username : `log in`}</button>
                    </Link>
                </li>

                <li>
                    <Link to = "/">
                        <button className='btn btn-primary join-item w-30 no-animation sm:w-40'>Home</button>
                    </Link>
                </li>

                <li>
                    <Link to = "/search">
                        <button className='btn btn-primary join-item w-30 no-animation sm:w-40' >topics</button>
                    </Link>   
                </li>
                
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header