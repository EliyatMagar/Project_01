import React from 'react' 
import logo from "../image/nav-logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div>
        <div className='parent p-16' style={{backgroundColor:"#252527"}}>
            <div className=' top-section  gap-6 text-white flex flex-col ' >
                <div className='grid  md:grid-cols-2 lg:grid-cols-2 gap-6  justify-between'>
                    <div className="left mr-9">
                        <img src={logo}alt="" />
                        <p className='py-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse officia blanditiis velit dolorum, doloremque obcaecati eligendi nostrum laudantium nisi.</p>
                    </div>
                    <div className="right flex gap-20 ">

                        <div className='job-seeker list-none '>
                            <h1 className='text-lg'>Job Seekers</h1>
                            <div className='text-gray-500'>
                            <li><a href="#">Search Jobs</a></li>
                            <li><a href="#">Explore Jobs</a></li>
                            <li><a href="#">Saved Jobs</a></li>
                            <li><a href="#">Applied Jobs</a></li>

                            </div>
                            
                        </div>


                        <div className="employee list-none ">
                            <h1 className='text-lg'>Employee</h1>
                            <div className='text-gray-500' >
                               <li><a href="#">Register</a></li>
                                <li><a href="#">Post Jobs</a></li>
                                <li><a href="#">Applications</a></li>
                            </div>
                       
                        </div>

                        <div className="legal list-none ">
                            <h1 className='text-lg'>Legal</h1>
                            <div className='text-gray-500'>
                            <li><a href="#">Cookies Policy</a></li>
                             <li><a href="#">Privacy Policy</a></li>
                             <li><a href="#">Terms of Service</a></li>
                            </div>
                        
                        </div>
                    </div>
                </div>
                   
                <div className="bottom flex justify-between items-center my-4">
                    <p>copyright &copy; 2024 Pacific Hunt. All rights reserved.</p>
                    <div className="logo text-white flex gap-6 px-20">
                    <FontAwesomeIcon icon={faTwitter} className="text-white" />
                     <FontAwesomeIcon icon={faFacebook} className="text-white" />
                     <FontAwesomeIcon icon={faGithub} className="text-white" />
                     <FontAwesomeIcon icon={faInstagram} className="text-white" />
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
