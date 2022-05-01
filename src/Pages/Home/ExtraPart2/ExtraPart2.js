import React from 'react';
import './ExtraPart2.css'
import { ArrowRightIcon } from '@heroicons/react/solid'
import image1 from '../../../images/image/email (1).png'

const ExtraPart2 = () => {
    return (
        <div className='background-color'>
            <hr />
            <div className='container'>
                <div className='row m-5 p-5'>
                    <div className='col-lg-6 col-12'>
                        <h1>Support & Inquiry</h1>
                        <br />
                        <span><strong>Email</strong></span>
                        <br />
                        <small> templatainspiro@gmail.com </small>
                        
                        <h6 className='text-design'> OR </h6>
                        <span><strong>Live Chat</strong></span>
                        <br />
                        <small>Corner Right side</small> 
                        <div >
                           <ArrowRightIcon className='w-25'></ArrowRightIcon>
                        </div>

                    </div>
                    <div className='col-lg-6 col-12'>
                        <img className='w-100' src={image1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraPart2;