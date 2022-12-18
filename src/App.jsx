import React, { useState, useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import VideoPlayer from './components/utils/VideoPlayer/VideoPlayer'
import Channel from './pages/Channel/Channel'
import Navbar from './components/common/Navbar/Navbar'


const App = () =>  { 
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/watch" element={<VideoPlayer />}/>
      <Route exact path="/channel/:id" element={<Channel />} />
    </Routes>
  </>
  )
}

export default App
