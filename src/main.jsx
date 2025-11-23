import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
// import { RouterProvider } from "react-router/dom";
import Root from './root/Root.jsx'
import Home from './pages/Home.jsx'
import { RouterProvider } from 'react-router/dom'
import Services from './pages/Services.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services }]
  },
  {
    path: 'services',
    Component: Services
  },
  {
    path: 'login',
    Component: Login
  },
  {
    path: 'register',
    Component: Register
  }

])
createRoot(document.getElementById('root')).render(

  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
