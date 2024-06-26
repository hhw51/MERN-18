
import PropTypes from "react";

const SignUp = ({setLogin}) => {
    return (
      <div className="h-screen w-screen bg-gray-400 flex items-center justify-center">
      <div className="h-3/5 w-1/4 bg-white rounded-md ">
        <div className="h-1/4 ">
          <p className="text-3xl font-semibold w-full h-full flex justify-center items-center">
            SignUp Form
          </p>
        </div>
  
        <div className="h-2/4  flex flex-col justify-center p-2">
          <label className="text-lg font-semibold py-2 text-gray-600">
            Username
          </label>
          <input
            className="bg-gray-200 border-2 p-2  outline-none border-gray-300 rounded-md"
            placeholder="username"
            required
            type="text"
          />
          <label className="text-lg font-semibold py-2 text-gray-600">
            Password
          </label>
          <input
            className="bg-gray-200 border-2 p-2 border-gray-300 rounded-md  outline-none"
            placeholder="password"
            required
            type="password"
          />
        </div>
        <p>{"Don't have an account"}
          <span className="hover:underline cursor-pointer  text-blue-600" onClick={()=>{
            setLogin(true)
          }}>{"Login"}</span>
          </p>
        <div className="h-1/4  w-full flex justify-center items-center p-2 ">
          <button className="bg-blue-600 w-full text-white py-2  rounded-md text-xl font-semibold">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
  }
  
SignUp.propTypes={      
      setLogin: PropTypes.func,
}

export default SignUp