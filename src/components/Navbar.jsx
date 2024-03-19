import React from 'react'
import { FaTimes,FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className='w-full h-10 p-2 flex justify-between'>
        <div className="">
          <h1 className="">F</h1>
        </div>
        <div>
          <ul className='grid grid-cols-4 gap-2'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
       {/*<FaBars/>*/}
      
    </div>
  )
}

export default Navbar