import React from 'react'

import Image from 'next/image';
import Logo from '../images/vvi-logo.png'




const Header = () => {
  return (
    <>
   
        <header className="header">
            <nav className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <a href="/" className='logo-container'>
                           <Image 
                           src={Logo}
                           alt="Logo"
                           className='brand-logo'
                           
                           />
                        </a>
                    </div>
                    <div className="col-lg-10">
                        <ul className="v-navbar mobo-hide">
                            <li><a href='/' className=''><i className='feather icon-feather-home'></i></a></li>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#experience">Experience</a></li>
                            <li><a href="/#work">Works</a></li>
                            <li><a href="/#skills">Skills</a></li>
                            <li><a href="/#blogs">Blogs</a></li>
                        </ul>

                        
                    </div>  
                </div>
            </nav>

           
        </header>
    </>
  )
}

export default Header