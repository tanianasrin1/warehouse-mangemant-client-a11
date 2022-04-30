import React from 'react';
import './NotFound.css'

import image from '../../images/image/f (1).jpg'

const NotFound = () => {
    return (
        <div className='text-center mt-4'>
            <h1 className='Found-title'>Not Found !!!</h1>
            <img className='mt-3' src={image} alt="" />
        </div>
    );
};

export default NotFound;