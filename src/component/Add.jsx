import React from 'react';
import desk_image from "../image/desk-man.png";

const Add = () => {
    return (
        <div className=' relative mt-16 py-4' >
            <div className='grid grid-cols-1 md:grid-cols-2 px-16 rounded shadow-xl' style={{backgroundColor:"#04334D"}}>
                <div className="left">
                    <h1 className='text-3xl my-7 mx-2 text-white font-semibold'>Join <span className='text-blue-500'>Pacific Hunt</span> today. Connect, Grow, Succeed.</h1>
                    <p className='text-white mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur ratione molestiae fugit repellendus.</p>

                    <div className="btn-section flex gap-4 my-4 mx-2">
                        <div>
                            <button className='text-white'>Join as jobseeker</button>
                        </div>
                        <div>
                            <button className='text-white'>Join as employer</button>
                        </div>
                    </div>
                </div>
                <div className="right mx-auto relative md:static">
                    <div className='img'>
                        <img src={desk_image} alt="" className="object-cover w-full h-full" style={{ marginTop: '-90px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;
