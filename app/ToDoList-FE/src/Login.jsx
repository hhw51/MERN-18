// import propTypes from "react";
// import React from "react";

import axios from "axios";
import { useState } from "react";

const Login = ({ setLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/auth/login",
      {
        userName,
        password,
      },
      {
        withCredentials: true,
      }
    );
    if (data.error) {
      return alert(data.error.message);
    }
    return alert(data.response.message);
  };
  return (
    <>
      <div className="container bg-green-300 w-screen h-screen flex justify-center items-center">
        <div className="login-container h-2/4 bg-gray-400 w-1/3 rounded-md px-2">
          <div className="heading text-green-700 w-full h-1/4 flex justify-center items-center text-2xl font-semibold">
            <p className="border-b-2 border-green-600">Login</p>
          </div>
          <div className="input-fields mt-3 outline-none flex flex-col pb-2">
            <input
              className="my-2 p-2 rounded"
              type="text"
              name="text"
              id=""
              placeholder="UserName"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              className="my-2 p-2 rounded"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>
              {"Fon,t have an Account"}{" "}
              <span
                className="hover:underline text-blue-600 cursor-pointer"
                onClick={() => {
                  setLogin(false);
                }}
              >
                {"Signup"}
              </span>
            </p>
          </div>
          <button
            className="w-full mt-5 outline-none h-2/8 bg-green-500 text-gray-300 py-2 font-semibold "
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
// Login.propTypes = {
//   setLogin: PropTypes.func,
// };
export default Login;
