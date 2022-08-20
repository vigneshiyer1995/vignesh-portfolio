import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../images/vvi-logo.png'




const Header = () => {
  return (
    <>
   
        <header className="header">
            <nav className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-2">

                        <div className="logo-container">
                        <Link href="/">
                           <Image 
                           src={Logo}
                           alt="Logo"
                           className='brand-logo'
                           
                           />
                        </Link>
                        </div>
                        
                    </div>
                    <div className="col-lg-10">
                        <ul className="v-navbar mobo-hide">
                            <li><Link href='/' ><i className='feather icon-feather-home'></i></Link></li>
                            <li><Link href="/#about">About</Link></li>
                            <li><Link href="/#experience">Experience</Link></li>
                            <li><Link href="/#work">Works</Link></li>
                            <li><Link href="/#skills">Skills</Link></li>
                            <li><Link href="/#blogs">Blogs</Link></li>
                        </ul>

                        
                    </div>  
                </div>
            </nav>

           
        </header>
    </>
  )
}

export default Header