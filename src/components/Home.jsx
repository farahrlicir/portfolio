import React from 'react'
import background from '../assets/desktop computer-bro.svg';
import Img from "../assets/desktop computer-bro.png";
import '../index.css';

function Home() {
  return (
    <div name="home" className='h-full w-full gradient'>
         <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${background})` }}>
            <div className='md:w-1/2'>
              <h1>hello, im Farah </h1>
              <p>
                its me hi im the problem its nme
                at tea timr everybody agree 
                nonojjooj siakrjouhfsd.....
              </p>
            </div>
              <img className='md:w-1/2' src={Img} alt="myportfolioimg" />
         </div>
         <div>

         </div>
    </div>
  )
}

export default Home