import React from 'react';
import  Image  from './images/github.png'

function Footer() {

    return(
        <div className='footer' style={{background: 'rgb(51, 51, 51)'}}>

              <a
                href="https://github.com/atn362/crud_project"
                rel="noopener noreferrer"
                target="_blank"
              >
               <img style={{height: '35px'}} src={Image} alt="Github Icon"/>
              </a>
              
            <p style={{color: 'white'}}>Travel Blog created by Group 3. UofM BootCamp....2021</p>
            
        </div>
    );
};

export default Footer;