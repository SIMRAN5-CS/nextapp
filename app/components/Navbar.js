// "use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isHoveredfirst, setIsHoveredfirst] = useState(false);
    const [isHoveredsecond, setIsHoveredsecond] = useState(false);
    const [isHoveredthird, setIsHoveredthird] = useState(false);

    const handleMouseEnterfirst = () => {
      setIsHoveredfirst(true);
    };
  
    const handleMouseLeavefirst = () => {
      setIsHoveredfirst(false);
    };
    const handleMouseEntersecond = () => {
        setIsHoveredsecond(true);
      };
    
      const handleMouseLeavesecond = () => {
        setIsHoveredsecond(false);
      };
      const handleMouseEnterthird = () => {
        setIsHoveredthird(true);
       


      };
    
      const handleMouseLeavethird = () => {
        setIsHoveredthird(false);
      };
  
    return (
      <nav className=" py-4 flex bg-gray-500">
        <ul className=" mx-0 flex gap-4 ">
         
          <li className="relative" onMouseEnter={handleMouseEnterfirst} onMouseLeave={handleMouseLeavefirst}>
            <h3 className=" hover:text-gray-300 px-4 py-2 cursor-pointer">Courses</h3>
            {isHoveredfirst && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 shadow-lg">
                <ul className="py-2">
                  <li>
                    <Link href="/about">
                      <h3 className="text-white hover:text-gray-300 px-4 py-2 block">About</h3>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <h3 className="text-white hover:text-gray-300 px-4 py-2 block">Services</h3>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <h3 className="text-white hover:text-gray-300 px-4 py-2 block">Contact</h3>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="relative" onMouseEnter={handleMouseEntersecond} onMouseLeave={handleMouseLeavesecond}>
            <h3 className=" hover:text-gray-300 px-4 py-2 cursor-pointer">Designers</h3>
            {isHoveredsecond && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-300 shadow-lg">
                <ul className="py-2">
                  <li>
                    <Link href="/about">
                      <h3 className=" hover:text-gray-300 px-4 py-2 block">About</h3>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <h3 className=" hover:text-gray-300 px-4 py-2 block">Services</h3>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <h3 className=" hover:text-gray-300 px-4 py-2 block">Contact</h3>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="relative" onMouseEnter={handleMouseEnterthird} onMouseLeave={handleMouseLeavethird}>
            <h3 className=" hover:text-gray-300 px-4 py-2 cursor-pointer">Job</h3>
            {isHoveredthird && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-300 shadow-lg">
                <ul className="py-2">
                  <li>
                    <Link href="/about">
                      <h3 className=" hover:text-gray-300 px-4 py-2 block">About</h3>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <h3 className=" hover:text-gray-300 px-4 py-2 block">Services</h3>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <h3 className=" hover:text-gray-300 px-4 py-2 block">Contact</h3>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          
         
        </ul>
        <div className=" w-max absolute left-1/2  ">
          <Link className="text-5xl font-semibold hover:text-gray-300  py-auto" href="/">
            Dribble
          </Link>
        
        </div>
      </nav>
    );
};

export default Navbar;