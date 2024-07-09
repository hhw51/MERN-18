import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-y-8'>
        <p className='text-black text-4xl'>HOME PAGE</p>
        <Link to="/task" className='text-black text-xl cursor-pointer'>Task Page</Link>
        <Link to="/profile"className ="text-black text-xl cursor-pointer">Profile Page</Link>
        <Link to="/auth"className ="text-black text-xl cursor-pointer">Login Page</Link>
    </div>
    </>
  )
}

export default Home
