import React from 'react';
import logo from '../static/img/dp.png';

function Body() {
  return (
    <div className='w-[100%] md:w-[40%] flex justify-center items-center m-auto p-4 my-6'>
      <div className='md:flex justify-between items-center m-auto flex md:flex-row flex-col'>
        <div className='justify-center items-center flex m-auto'>
          <img src={logo} alt='image' className='md:w-[200px] w-[100%] md:flex hidden'  />
        </div>
        <div className='md:w-[50%] w-[100%]'>
          <img className='items-center justify-center flex m-auto' width='100px' src='https://w7.pngwing.com/pngs/806/254/png-transparent-hand-waving-wave-emoji-wave-hand-arm-sign-thumbnail.png' />
          <p className='text-slate-500 text-center max-w-[100%] md:max-w-[100%] mx-auto md:text-1xl w-[100%] md:w-[100%]'>Hello There! I am Marcel James V. Aribal, currently pursuing a Bachelor of Science in Computer Engineering. This is my final year in college, and I am still studying various software technologies.</p>
        </div>
      </div>
    </div>
  )
}

export default Body;
