import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationDot, faClock, faBookmark, faCircle } from '@fortawesome/free-solid-svg-icons';
import ellipse from '../image/Ellipse 281.jpg';

const Sub_jobs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">Top Job Openings</h1>
          <button className="bg-blue-400 text-lg text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
            See More <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="border border-indigo-100 rounded-lg  overflow-hidden hover:border-blue-500 hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-center p-3">
                <img src={ellipse} alt={`Job ${index + 1}`} className="w-12 h-12 rounded-full" />
                <div>
                  <button type="button" className="bg-blue-200 text-blue-600 px-3 py-2 rounded-lg">Apply Now</button>
                </div>
              </div>
              <h1 className="text-lg font-semibold p-3">Deep Learning Engineer</h1>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="text-blue-300" />
                  <p className="ml-1">Sydney, Australia</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="ml-1">Expires in 25 Days</p>
                </div>
              </div>
              <div className="p-3">
                <p className="mb-2">Onsite <FontAwesomeIcon icon={faCircle} /> InterMediate <FontAwesomeIcon icon={faCircle} /> Internship</p>
                <h1 className="font-semibold">Salary: 50k-90k</h1>
              </div>
              <div className="border-t border-gray-300 p-3 flex justify-between items-center">
                <h1>The Batman Corporation</h1>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sub_jobs