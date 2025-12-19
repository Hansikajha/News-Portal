import React from 'react';
import {Link} from 'react-router-dom';

const links=[
  {label:"Home", to:"/"},
  {label: "Latest News", to: "/latest-news"},
  {label: "Trending", to:"/trending"},
  {label: "Politics", to:"/politics"},
  {label:"Sports", to:"/sports"},
  { label: "Entertainment", to: "/entertainment" },
  { label: "Business", to: "/business" },
  { label: "Technology", to: "/technology" },
  { label: "Health", to: "/health" },
];

export default function BottomNav() {
  return(
    <div className='sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md'>
      <nav className='flex overflow-x-auto whitespace-nowrap md:justify-center gap-6 md:gap-8 py-3 text-lg font-medium text-gray-700 px-4 md:px-0'>
        {links.map((link)=>(
          <Link 
            key={link.to} 
            to={link.to} 
            className='shrink-0 pb-1 border-b-2 border-b-transparent hover:border-gray-700 transition-colors duration-200 hover:text-blue-500'
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}