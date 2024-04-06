import React from 'react';
import png1 from "../image/pngimg 1.jpg";
import png2 from "../image/pngimg 2.png";
import png3 from "../image/pngimg 3.png";
import png4 from "../image/pngimg 4.png";
import google from "../image/logos_google.png"

import Companies_sub_section from "./Compnies_sub_section"




const Companies = () => {
  return (
    <div>
      <div className="bg-gray-100">
      <div className="container py-8 mx-auto">
        <h1 className="text-3xl  font-bold text-center mb-8">Join in globally <span className='text-blue-500'>renowned </span>companies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-16">
           
          <img src={google} alt="" className="w-full" />
          <img src={png1} alt="" className="w-full" />
          <img src={png2} alt="" className="w-full " />
          <img src={png3} alt="" className="w-full " />
          <img src={png4} alt="" className="w-full" />
        </div>
      </div>
    </div>
    <Companies_sub_section/>
    </div>
    
  );
}

export default Companies;
