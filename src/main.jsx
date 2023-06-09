import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Products from './components/Products.jsx'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom"
import Showcase from "./components/Showcase.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/showcase",
    element: <Showcase/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
