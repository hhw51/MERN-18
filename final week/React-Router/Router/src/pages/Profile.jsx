import { Link } from 'react-router-dom'
// import './App.css'

function Profile() {

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-y-8'>
        <p className='text-black text-4xl'>Profile PAGE</p>
        <Link to="/task" className='text-black text-xl cursor-pointer'>Task Page</Link>
        <Link to="/" className='text-black text-xl cursor-pointer'>Home Page</Link>
        {/* <Link to="/profile"className ="text-black text-xl cursor-pointer">Profile Page</Link> */}
    </div>
    </>
  )
}

export default Profile
