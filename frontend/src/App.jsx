import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <nav className=' text-white flex-initial'>
        <div>
        <a href="https://www.youtube.com/" className='m-32 p-5 '>youtube</a>
        </div>
        <div>
        <a href="https://www.youtube.com/" className='m-32 p-5 '>amazon</a>
        </div>
       
      </nav>
      </div>
    <div className='bg-gray-500 text-white w-full h-10px mt-0'>
        hello
    </div>
    <div>
    <h1 className=' p-4 m-0'>Hi</h1>
    </div>
   
    </>
  )
}

export default App
