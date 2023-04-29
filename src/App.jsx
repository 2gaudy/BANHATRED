import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  

  return (
   <div className='body'>
    <div className='navbar'>
      <div className='header'>
        <h1><a href="#">BANHATRED</a></h1>
      </div>
      <div className='nav-list'>
        <ul>
          <li><a href='#'>PRODUCTS</a></li>
          <li><a href='#'>LOG IN</a></li>
          <li><a href='#'>SOCIALS</a></li>
        </ul>
      </div>
    </div>
    <div className="landing">
      <Spline scene="https://prod.spline.design/7sp4OekXuA3EqS9x/scene.splinecode" />
    </div>
   </div>
  )
}

export default App
