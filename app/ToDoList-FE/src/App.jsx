// import { useState } from "react";
// import Login from './Login'
// import SignUp from './Sign-up';
import Index from './components/Layout/Index';
  
function App(){
  // const [login, setLogin] = useState(true);

  return (
    <>
    <div className="screen h-screen bg-gray-200">
      <Index/>    

    {/* {login ? <Login setLogin={setLogin}/> : <SignUp setLogin={setLogin}/>} */}
    </div>

  </>
    );
}

export default App;