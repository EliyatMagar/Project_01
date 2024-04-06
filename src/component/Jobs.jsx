import React from 'react';
import Sub_jobs from './Sub_jobs';
import Job_category from './Job_category';
import Add from './Add';
import Footer from './Footer'


const Jobs = () => {
  return (
    <div>
        <div className='bg-gray-300  text-2xl font-semibold px-16 py-8'>
              <h1>Find Your Dream <span className='text-blue-500'>Jobs.</span></h1>
        </div>
        <div className='p-16'>
          
          <div className='bg-white'>
              <div className=' bg-gray-100 py-2 rounded shadow-lg '>
                <div className="search-container flex flex-col  justify-between md:flex-row items-center gap-4 md:gap-6">
                  <input type="text" className="px-4 py-3 md:w-72 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Job title Keyword"/>
                  <input type="text" className="px-4 py-3 md:w-72 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter Location" />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Search</button>
                </div>
              </div>
          </div>
         </div>
         <Job_category/>
         <Sub_jobs/>
         <Add/>
         <Footer/>
    </div>
    
  );
};

export default Jobs;
