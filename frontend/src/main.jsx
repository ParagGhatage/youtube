import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Shorts from './pages/Shorts.jsx'
import Home from './pages/Home.jsx'
import Subscriptions from './pages/Subscriptions.jsx'
import Downloads from './pages/Downloads.jsx'
import Myaccount from './pages/MyAccount.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Copyright from './pages/Copyright.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={[<Home/>,<Layout/>]}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/shorts' element={<Shorts/>}/>
      <Route path='/subscriptions' element={<Subscriptions/>}/>
      <Route path='/downloads' element={<Downloads/>}/>
      <Route path='/myaccount' element={<Myaccount/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/copyright' element={<Copyright/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
