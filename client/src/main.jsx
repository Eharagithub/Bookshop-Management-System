import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import AuthProviderr from './contects/AuthProviderr.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderr>
      <RouterProvider router={router} />
    </AuthProviderr>

  </React.StrictMode>,
)
