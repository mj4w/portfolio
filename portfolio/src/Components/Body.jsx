import React from 'react';
import logo from '../static/img/profile1.png';

function Body() {
  return (
    <div className='w-[100%] md:w-[40%] flex justify-center items-center m-auto p-4 my-6'>
      <div className='md:flex justify-between items-center m-auto flex md:flex-row flex-col'>
        <div className='justify-center items-center flex m-auto'>
          <img src={logo} alt='image' className='md:w-[300px] w-[300px]'  />
        </div>
        <div className='md:w-[50%] w-[100%]'>
          <p className='text-slate-500 text-center mt-3 max-w-[100%] md:max-w-[100%] mx-auto md:text-1xl w-[100%] md:w-[100%]'>Hello There! I am Marcel James V. Aribal, currently pursuing a Bachelor of Science in Computer Engineering. Spending most of my time coding & exploring new programming languages.</p>
        </div>
      </div>
    </div>
  )
}

export default Body;
