import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import LatestNews from './pages/LatestNews';
import Trending from './pages/Trending';
import Politics from './pages/Politics';
import World from './pages/World';
import Sports from './pages/Sports';
import Entertainment from './pages/Entertainment';
import Business from './pages/Business';
import Technology from './pages/Technology';
import Health from './pages/Health';
import Login from './pages/Login';
import Subscribe from './pages/Subscribe';

function App() {


  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/latest-news' element={<LatestNews/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/politics' element={<Politics/>} />
        <Route path='/world' element={<World/>} />
        <Route path='/sports' element={<Sports/>} />
        <Route path='/entertainment' element={<Entertainment/>} />
        <Route path='/business' element={<Business/>} />
        <Route path='/technology' element={<Technology/>} />
        <Route path='/health' element={<Health/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/subscribe' element={<Subscribe />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
