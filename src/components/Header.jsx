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
        <h3>{loggedInMessage}</h3>
        
        <nav id='main_navBar'>
            <ul className='nav_list'>
    
                <li>
                    <Link to = "/login">

                        <button>login</button>
                    </Link>
                </li>

                <li>
                    <Link to = "/">
                        <button>Home</button>
                    </Link>
                </li>

                <li>
                    <Link to = "/search">
                        <button>Search</button>
                    </Link>   
                </li>
                
            </ul>
        </nav>

      </header>
    </>
  )
}

export default Header