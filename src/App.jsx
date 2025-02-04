import { useState } from 'react'
import './App.css'

import Home from './components/home/Home'
import About from './components/about/about'
import Contact from './components/contact/contact'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './components/first/First'

function App() {

  const router = createBrowserRouter ([
    {
      path : '/',
      element : <First />,
      children : [
        {
          index : "/home",
          element : <Home />,
        },
        {
          index : "/about",
          element : <About />,
        },
        {
          index : "/contact",
          element : <Contact />,
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
