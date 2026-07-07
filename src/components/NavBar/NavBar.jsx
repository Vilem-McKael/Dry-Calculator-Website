import React from 'react'
import { Link } from 'react-router-dom'
import dryCalcLogo from '../../assets/dryCalc.png'
import { IoMdInformationCircle as InfoLogo } from "react-icons/io";
import { DiPhonegap as GalleryLogo } from "react-icons/di";
import { MdConnectWithoutContact as ContactLogo } from "react-icons/md"
import { IconContext } from 'react-icons';

export default function NavBar() {
  return (
    <>
        <IconContext.Provider value={{ color: "#f5f5f5", width: "40px"}}>

            <div className='w-full flex flex-row lg:px-20 items-between md:items-center justify-center fixed top-0 right-0 left-0 bg-[#3A3A3D] z-10'>
                <div className='flex items-center justify-evenly text-base sm:text-xl h-[100px] sm:h-[120px] w-full text-white max-w-[900px]'>
                    <Link to='/' className='flex flex-col justify-center items-center hover:scale-110 duration-100'>
                        <img className='rounded-md nav-icon' src={dryCalcLogo} />
                        <div className='pt-1 sm:pt-3'>Home</div>
                    </Link>
                    {/* <Link to='/about' className='flex flex-col justify-center items-center hover:scale-110 duration-100'>
                        <InfoLogo className='nav-icon'/>
                        <div className='pt-1 sm:pt-3'>About</div>
                    </Link> */}
                    <Link to='/gallery' className='flex flex-col justify-center items-center hover:scale-110 duration-100'>
                        <GalleryLogo className='nav-icon'/>
                        <div className='pt-1 sm:pt-3'>Gallery</div>
                    </Link>
                    <Link to='/support' className='flex flex-col justify-center items-center hover:scale-110 duration-100'>
                        <ContactLogo className='nav-icon'/>
                        <div className='pt-1 sm:pt-3'>Support</div>
                    </Link>
                </div>
            </div>

        </IconContext.Provider>
    </>
  )
}
