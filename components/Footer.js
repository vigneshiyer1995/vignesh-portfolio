import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <>

    <div className="container text-center">
        <div className="row">
            <div className="col-lg-12">
            <div className="copyright text-center">
            <p>© Copyright 2022, All Right Reserved <Link href="/" ><span className='text-orange'>Vignesh Iyer</span></Link></p>
        </div>
            </div>
        </div>
    </div>
        
    
    </>
  )
}

export default Footer