import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import twitter from '../image/twitter.png';
import unknown from '../image/unknown.png';
import apple from '../image/apple.png';
import logosSkype from '../image/logos_skype.png';

const CompaniesSubSection = () => {
  return (
    <div className="container mx-auto md:py-16">
      <div className="lower-section">
        <div className="top-sec flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Featured Companies</h1>
          <button className="bg-white px-4 py-2 border border-indigo-500/100 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
            See More <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[twitter, unknown, twitter, logosSkype, unknown, apple].map((companyImage, index) => (
            <div key={index} className="company-section border border-indigo-500/100 rounded-lg shadow-lg p-4">
              <div className="top flex justify-between items-center mb-2">
                <div className="img-div rounded-full p-2 bg-gray-100">
                  <img src={companyImage} alt={`Company ${index}`} />
                </div>
                <div className="btn-div">
                  <button type="button" className="border border-indigo-500/100 px-2 py-1 rounded-xl">115 jobs available</button>
                </div>
              </div>
              <div className="middle mb-2">
                <h1 className="text-lg font-semibold">Twitter</h1>
                <p className="text-slate-500"><FontAwesomeIcon icon={faLocationDot} /> Perth, Australia</p>
              </div>
              <div className="bottom flex justify-between">
                <div className="right-div border border-indigo-500/100 px-1 rounded-xl">
                  <p>Information Technology</p>
                </div>
                <div className="left-div border border-indigo-500/100 px-1 rounded-xl">
                  <p>Finetech</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesSubSection;
