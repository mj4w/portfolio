import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';

function NavBar(text) {

  navigator.clipboard.writeText(text)
  .then(() => {
    alert('Discord Username Copied!');
  })
  .catch((error) => {
    console.error('Error Copying',error);
  });
  const handleDownload = () => {
    const cvFilePath = 'pdf/MarcelJames_Aribal_Resume_2023.pdf';
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'MarcelJames_Aribal_Resume_2023';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center m-auto my-5" onClick={handleDownload}>
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Download CV</span>
        </button>
        <div className='flex justify-between items-center m-auto text-[#292841] p-3 text-3xl md:w-[50%] w-[100%]  p'>
          <a href='https://www.facebook.com/proudtobea4thwatcher.07' target='_blank' rel='noopener noreferrer'><AiFillFacebook /></a>
          <a href='https://www.linkedin.com/in/marceljames4w/'target='_blank' rel='noopener noreferrer'><AiFillLinkedin /></a>
          <a href='https://github.com/mj4w'target='_blank' rel='noopener noreferrer'><AiFillGithub /></a>
          <button onClick={() => NavBar('mj4w#0840')}><BsDiscord /></button>
          <a href='mailto: marcelaribal963@gmail.com'target='_blank' rel='noopener noreferrer'><BiLogoGmail /></a>
          
          
         


        </div>
    </div>
  )
}

export default NavBar