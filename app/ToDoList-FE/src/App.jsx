import { useState } from "react";
import Login from './Login'
import SignUp from './Sign-up';
  
function App(){

  const [login, setLogin] = useState(true);

  return (
    <>
    {login ? <Login setLogin={setLogin}/> : <SignUp setLogin={setLogin}/>}
  </>
    );
}

export default App;

{
/* //  <div className={` h-screen  ${background} `}>
//    <h1> {"React App"} </h1>

//    <button
//      onClick={() => {
//        setCount(count + 1);
//      }}
//    >
//      {"Count ++"}
//    </button>
//    <button
//      onClick={() => {
//        setCount(count - 1);
//      }}
//    >
//      {"Count --"}
//    </button>
//    <h1>{count}</h1>

//    <button
//      onClick={() => {
//        setBackground("bg-pink-400");
//      }}
//    >
//      Pink
//    </button>
//    <button
//      onClick={() => {
//        setBackground("bg-green-400");
//      }}
//    >
//      Green
//    </button>
//  </div>; */
}
