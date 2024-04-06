import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Slider_review from './Slider_review'

const About = () => {
 
  return (
    <div className='bg-gray-300'>
      <div className="top p-16 flex justify-between ">
        <h1 className='text-2xl font-bold'>What out Client Say abouts <span className='text-blue-700'>Pacific Hunt.</span> </h1>
        <div className="scroll-section flex gap-4">
          <div className="left border-slate-700">
            <div className='text-2xl font-bold cursor-pointer'>
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
            </div>
            
            </div>
          <h1 className='text-2xl font-bold'><span className='text-blue-700'>2</span>/14</h1>
          <div className="right text-2xl font-bold cursor-pointer"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>
        </div>
      </div>
      <div className="bottom p-16">
        <Slider_review/>
      </div>
    </div>
  )
}

export default About