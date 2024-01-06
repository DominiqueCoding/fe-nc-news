import { useState } from 'react'
import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from '../context/UserContext';

function Header() {
  const {currentUser} = useContext(UserContext)

  let loggedInMessage = "not logged in"

  if(currentUser){
    loggedInMessage = `logged in as ${currentUser.username}`
  }

  return (
    <>
      <header id='main_header'>
        <h1>NC News</h1>
        <h2>get the latest news here!</h2>

        {/* <h1 class="text-3xl font-bold underline mb-10">Hello Vue!</h1>
        <button class="btn btn-primary">Hello Daisy button</button> */}

        <h3>{loggedInMessage}</h3>
        
        <nav id='main_navBar'>
            <ul className='join'>
    
                <li>
                    <Link to = "/login">
                        <button className='btn join-item w-30 no-animation sm:w-40'>login</button>
                    </Link>
                </li>

                <li>
                    <Link to = "/">
                        <button className='btn join-item w-30 no-animation sm:w-40'>Home</button>
                    </Link>
                </li>

                <li>
                    <Link to = "/search">
                        <button className='btn join-item w-30 no-animation sm:w-40' >Search</button>
                    </Link>   
                </li>
                
            </ul>
        </nav>

      </header>
    </>
  )
}

export default Header