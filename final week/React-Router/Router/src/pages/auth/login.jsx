import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../App'
// import './App.css'

function Login() {
    const [isLogin,setIsLogin]=useContext(LoginContext)
    const navigate=useNavigate()
    const login=()=>{
        setIsLogin(true)
        navigate("/")
    }
  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-y-8'>
        <p className='text-black text-4xl'>Login Page</p>
        <Link to="/task" className='text-black text-xl cursor-pointer'>Task Page</Link>
        <Link to="/profile"className ="text-black text-xl cursor-pointer">Profile Page</Link>
        <Link to="/auth/signup"className ="text-black text-xl cursor-pointer">SignUP Page</Link>
        <p className='text-black text-4xl' onClick={login}>LOGIN</p>
    </div>
    </>
  )
}

export default Login
