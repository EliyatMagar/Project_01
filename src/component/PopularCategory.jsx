import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPenNib } from '@fortawesome/free-solid-svg-icons';

const PopularCategory = () => {
  return (
    <div className='container mx-auto  py-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold text-gray-700'>Popular Categories</h1>
        <button className='btn-pop py-2 px-4 text-lg bg-blue-300 hover:bg-blue-400 text-white rounded transition-all duration-300'>
          See More <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8'>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className='popular-frame border border-gray-200 rounded transition-all duration-300 hover:border-blue-400 hover:shadow-lg'>
            <div className='p-4 flex items-center gap-4'>
              <div className='bg-blue-200 p-4 text-blue-500 text-xl rounded transition-all duration-300 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-400'>
                <FontAwesomeIcon icon={faPenNib} />
              </div>
              <div>
                <h1 className='font-semibold text-gray-700'>Graphics & Design</h1>
                <p className='font-medium text-gray-500'>418 open positions</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
