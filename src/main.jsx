import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './pages/About.jsx'
import Expertise from './pages/Expertise.jsx'
import Portfolio from './pages/Portfolio.jsx'
import NotFound from './pages/NotFound.jsx'


const router = createBrowserRouter([{ 
  path: '/',
  element:<App/>,
  children:[
    {index: true, element: <About /> }, // ✅ Default child when visiting `/`
    {path:'about', element: <About/>},
    {path:'expertise', element: <Expertise/>},
    {path:'portfolio', element: <Portfolio/>},
    { path: '*', element: <NotFound /> } // ✅ Handle unknown routes
  ]
  },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
