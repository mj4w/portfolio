import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const PAGE_SIZE = 1;

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);

  // Sample data for demonstration
  const sampleData = [
    {
      text: 'E-commerce Website',
      link: 'https://github.com/mj4w/WIFFBAR_PH',
    },
    {
      text: 'Rapid Code Quest',
      link: 'https://github.com/mj4w/RapidCodeQuest',
    },
    {
      text: 'Social Media',
      link: 'https://github.com/mj4w/SM_DjangoWebsite',
    },
    {
        text: 'Notepad built in Django API + React',
        link: 'https://github.com/mj4w/django-react_integrate',
      },
    // Add more data as needed
  ];

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
      <h1 className='text-2xl'>Projects</h1>
      <div>
        {getPageData().map((item, index) => {
          return (
            <div key={index} className='m-auto md:p-4 '>
              <p className='text-slate-500 p mb-5 md:text-2xl text-1xl p-4 text-center'>{item.text}</p>
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


