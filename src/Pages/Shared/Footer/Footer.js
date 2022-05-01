import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <p className='footer-items'><small> {year} @ All rights reserved. Powered by Marlee  </small></p>
        </footer>
    );
};

export default Footer;