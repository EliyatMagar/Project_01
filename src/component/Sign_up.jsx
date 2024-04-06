import React from 'react'
import logo from "../image/nav-logo.png"

const Sign_up = () => {
  return (
    <div>
        <div className="sign-section flex flex-col items-center justify-center py-10 ">
            <div className="head-section text-2xl font-semibold my-4">Join <span className='text-blue-500'>Pacific Hunt </span>Today</div>

            <div className="container-section shadow-xl border border-blue-500flex items-center flex-col py-10 px-7 rounded-xl">
               <div className="logo">
                 <img src={logo} alt="horse" />
               </div>
               <div className="input-section flex flex-col my-4">
                   <div className="email flex flex-col my-2">
                      <label htmlFor="" className='text-md font-medium my-1'>Email</label>
                      <input type="text" className='px-4 py-2 rounded border border-slate-300' />
                   </div>
                   <div className="password flex flex-col my-1">
                      <label htmlFor="" className='text-md font-medium my-1'>Password</label>
                      <input type="" className='px-4 py-2 rounded border border-slate-300' />
                   </div>
                 
                 <div className="login bg-blue-400 flex flex-col items-center justify-between p-2 my-2 text-white cursor-pointer hover:bg-blue-600 transition duration-300">
                    <button>Log in</button>
                 </div>

                 <div className='items center flex flex-col justify-center'>
                      <p ><a href="#" >Forget password?</a></p>
                 </div>

                 

                 
               </div>
            </div>
        </div>
    </div>
  )
}

export default Sign_up