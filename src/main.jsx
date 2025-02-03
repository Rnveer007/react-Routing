 import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import  Home from './components/home/Home.jsx'
import About from './components/about/about.jsx'
import  Contact from './components/contact/Contact.jsx'

const router = createBrowserRouter ([
{
    path : "/",
    element : <Layout />,
    children : [
        {
            index: true,
            element : <Home />
        },
        {
            path : "about",
            element : <About />
        },
        {
            path : "contact",
            element : <Contact />
        }
    ]
}
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} /> 

)
