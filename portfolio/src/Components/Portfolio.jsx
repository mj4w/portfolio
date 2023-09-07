import React, { useState } from 'react';
import eCommerceImg from '../static/img/imgEcommerce.png';
import codeQuestImg from '../static/img/imgRapidQuest.jpg';
import notepadImg from '../static/img/imgNotepad.png';
import socialmediaImg from '../static/img/imgSocialMedia.png';
import pansnapImg from '../static/img/pansnap.png';
import birthdayImg from '../static/img/birthday.png';


const PAGE_SIZE = 1;

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);

  // Sample data for demonstration
  const sampleData = [
    {
      text: 'E-commerce',
      link: 'https://github.com/mj4w/WIFFBAR_PH',
      image: eCommerceImg
    },
    {
      text: 'Code Quest',
      link: 'https://github.com/mj4w/RapidCodeQuest',
      image: codeQuestImg,

    },
    {
      text: 'Social Media',
      link: 'https://github.com/mj4w/SM_DjangoWebsite',
      image: socialmediaImg
    },
    {
        text: 'Notepad',
        link: 'https://github.com/mj4w/django-react_integrate',
        image: notepadImg
    },
    {
      text: 'Birthday',
      link: 'https://github.com/mj4w/HBD2U',
      image: birthdayImg
    },
    {
      text: 'Pansnap',
      link: 'https://github.com/mj4w?tab=repositories',
      image: pansnapImg
    },
    // Add more data as needed
  ];
  const itemCount = sampleData.length;
  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  const getPageData = () => {
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return sampleData.slice(startIndex, endIndex);
  };

  return (
    <div className='text-center w-[50%] items-center justify-center m-auto'>
      <h1 className='text-2xl'><span className='text-[#384f81]'>{itemCount}</span> Projects</h1>
      <div>
        {getPageData().map((item, index) => {
          return (
            <div key={index} className='m-auto md:p-4 '>
     
              <p className='text-slate-500 p mb-5 md:text-2xl text-1xl p-4 text-center'>{item.text}</p>
              
              <img src={item.image} alt={item.text} className='md:w-[30%] w-[100%] mx-w-[70%] md:mx-w-[100%] flex items-center justify-center m-auto mb-8 rounded-md' />
              <a href={item.link} target="_blank" rel="noopener noreferrer" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                Source Code
              </a>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center gap-3 p-4 items-center m-auto'>
        {currentPage > 0 && (
          <button onClick={() => setCurrentPage((prev) => prev - 1)} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Previous</button>
        )}
        {currentPage < Math.ceil(sampleData.length / PAGE_SIZE) - 1 && (
          <button onClick={() => setCurrentPage((prev) => prev + 1)} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'>Next</button>
        )}
      </div>
    </div>
  );
}

export default Portfolio;


