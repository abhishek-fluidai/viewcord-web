import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './components/routes'
import Loader from './components/utils/Loader/Loader'
import './index.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={router}
    fallbackElement={<Loader />}
  />
)
