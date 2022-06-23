import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ChatPage from './component/pages/ChatPage'
import Home_page from './component/pages/home/home_page'




function Nopage() {
  return (
    <div>Nopage</div>
  )
}


export default function App() {
 
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home_page />}>
      </Route>
        <Route path='/chat' element={<ChatPage />}></Route>
        <Route path='*' element={< Nopage />}></Route>
           
    </Routes>
    
    </BrowserRouter>
 
    </>
  )
}
