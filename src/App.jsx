import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Header from './components/Header'
import Articles from './components/ArticleList'
import Login from './components/Login';


function App() {
  

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="" element={<Articles/>}></Route> */}
        
      </Routes>
    </BrowserRouter>
       
  )
}

export default App
