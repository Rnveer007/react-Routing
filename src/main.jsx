 import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import  Home from './components/home/Home'
import About from './components/about/about'

const router = createBrowserRouter ([
{
    path : "/",
    element : <Layout />,
    children : [
        {
            path :  "",
            element : <Home />
        },
        {
            path : "about",
            element : <About />
        }
    ]
}
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} /> 

)
