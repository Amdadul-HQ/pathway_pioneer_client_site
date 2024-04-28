import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import ContextComponent from './Context/ContextComponent'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextComponent>
        <RouterProvider router={router}></RouterProvider>
      </ContextComponent>
    </HelmetProvider>
  </React.StrictMode>,
)
