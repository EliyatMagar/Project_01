import React from 'react'
import hero1 from '../image/hero 1.png';

const Hero_section = () => {
  return (
    <div>
           <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-8 md:p-16">
          {/* Textual content section */}
          <div className="left flex flex-col gap-6 items-center">
            <div className="header-section text-center">
              <p className="text-sm md:text-base text-gray-600">Your Trusted Career Partner</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 my-2">
                Unlock Your Dream <span className="text-blue-600">Career</span>
              </h1>
              <p className="text-base md:text-lg text-gray-700 my-4 max-w-lg">
                Our platform is dedicated to empowering individuals, connecting talent with the right opportunities, and fostering professional growth.
              </p>
            </div>

            {/* Search input fields section */}
            <div className="search-container flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <input type="text" className="px-4 py-3 md:w-72 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Job title Keyword"/>
              <input type="text" className="px-4 py-3 md:w-72 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter Location" />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Search</button>
            </div>

            {/* Popular searches section */}
            <p className="text-sm md:text-base text-gray-600">
              <span className="text-base md:text-lg text-gray-800 font-semibold">Popular Searches:</span> Designer, Developer, Programmer, Architect
            </p>
          </div>

          {/* Image section */}
          <div className="image-container mt-16 md:mt-0 md:absolute md:top-32 md:right-5">
            <img src={hero1} alt="" className="max-w-xs md:max-w-lg"/>
          </div>
        </div>
    </div>
  )
}

export default Hero_section