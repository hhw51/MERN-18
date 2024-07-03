import { useState } from "react";
import Login from './Login'
import SignUp from './Sign-up';
// import Index from './index';
  
function App(){

  const [login, setLogin] = useState(true);

  return (
    <>
    {login ? <Login setLogin={setLogin}/> : <SignUp setLogin={setLogin}/>}
    {/* <Index/>     */}

  </>
    );
}

export default App;