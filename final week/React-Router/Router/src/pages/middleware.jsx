import  {  useContext, useEffect } from 'react'
import { LoginContext } from '../App'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const [isLogin,setIsLogin]=useContext(LoginContext)
        if(isLogin){
            return children;
        }
        return <>{<Navigate to="/auth" replace/>}</>
  
}

export default ProtectedRoute
