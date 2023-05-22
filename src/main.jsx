import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/landingpage/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthenticationPage from './authApp';


const router = createBrowserRouter([
  {
    path : '/',
    element: <App />
  },
  {
    path : '/home',
    element: <App />
  },
  {
    path : "/authuser",
    element : <AuthenticationPage />
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
