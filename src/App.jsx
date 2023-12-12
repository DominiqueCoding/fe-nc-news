import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Header from './components/Header'
import Articles from './components/ArticleList'
import Login from './components/Login';
import Search from './components/search';
import ArticleSelect from './components/ArticleSelect';


function App() {
  
  

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Articles/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/Article/:id" element={<ArticleSelect/>}></Route>
      </Routes>
    </BrowserRouter>
       
  )
}

export default App
