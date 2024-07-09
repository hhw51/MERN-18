import './App.css'
import {Route,Routes} from "react-router-dom"
import Not_Found from './not-found'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/auth/signup'
import Login from './pages/auth/login'
import Task from './Task'
import { createContext, useState } from 'react'
import ProtectedRoute from './pages/middleware'

export const LoginContext=createContext();
function App() {
  const [isLogin,setisLogin]=useState(false)
  return (
    <>
    <LoginContext.Provider value={[isLogin,setisLogin]}>

    <Routes path="/">
    <Route path="auth">
      <Route index element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
      
    </Route>
    <Route path="task">
      <Route index element={<Task/>}/>    
    </Route>
    
    <Route path="profile">
      <Route index element={
    <ProtectedRoute>
      <Profile/>
    </ProtectedRoute>
    
    }/>    
    </Route>
    <Route index element={
    <ProtectedRoute>
    <Home/>

    </ProtectedRoute>

    }/>    
    <Route path="*" element={<Not_Found/>}/>    
    
    </Routes>
    </LoginContext.Provider>
    </>
  )
}

export default App
