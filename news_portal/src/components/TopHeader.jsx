import React from 'react';
import {FaBars, FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function TopHeader(){
    return(
        <>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 gap-4'>
            
            {/* Left: Menu + Date */}
            <div className='text-sm text-gray-600 flex flex-col'>
                <div className='flex items-center gap-4'>
                  <FaBars size={20} className='cursor-pointer hover:text-gray-900 transition-colors'/>
                  <FaSearch size={18} className='cursor-pointer hover:text-gray-900 transition-colors'/>  
                </div>
                <div className='flex flex-col items-start mt-4 md:mt-8'>
                    <p className='text-gray-700 font-bold'>
                        Monday, December 15, 2025
                    </p>
                    <p className='text-xs'>
                        Today's Paper
                    </p>
                </div>
            </div>

            {/* Title */}
            <h1 className='text-2xl md:text-3xl font-serif tracking-wide text-gray-900 text-center md:text-left'>
                The News Times
            </h1>

            {/* Right Buttons */}
            <div className='flex items-center justify-center md:justify-end gap-3'>
                <Link to="/subscribe"
                  className='px-3 py-1 text-sm bg-blue-400 hover:bg-blue-500 rounded text-white transition-colors'>
                    Subscribe
                </Link>
                <Link to="/login"
                  className='px-3 py-1 text-sm bg-blue-400 hover:bg-blue-500 rounded text-white transition-colors'>
                    Login
                </Link>
            </div>
        </div>
        <hr className='border-gray-200 my-0'/>
        </>
    );
}