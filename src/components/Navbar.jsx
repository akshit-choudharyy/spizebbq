import React, { useEffect, useState } from 'react';
import logom from "../img/spicelogo.png";
import { BiPhoneCall } from "react-icons/bi";

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full z-40 bg-[#FEFAE0] fixed left-0 right-0 top-0 transition-all duration-300 ease-in-out ${isSticky ? "shadow-md bg-base-100" : ""}`}>
            <div className={`max-w-screen-2xl container mx-auto navbar xl:px-24 h-24`}> {/* Set a fixed height for the navbar */}
                <div className="navbar-start flex items-center h-full"> {/* Ensure the start section takes full height */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80 flex flex-col items-center"> {/* Adjusted width */}
                            <li className="text-lg "><a href="/">Home</a></li>
                            <li>
                                <a className='text-xl ' href='/menu'>Menu</a>
                                <ul className="w-full px-8 flex flex-col items-center"> {/* Full width and centered items */}
                                    <li className="text-lg  hover:text-red-700"><a className='hover:text-red-700' href='/menu'>Soups</a></li>
                                    <li className="text-lg  hover:text-red-700"><a className='hover:text-red-700' href='/menu'>Paneer Tikka</a></li>
                                    <li className="text-lg  hover:text-red-700"><a className='hover:text-red-700' href='/menu'>Veggies</a></li>
                                    <li className="text-lg  hover:text-red-700"><a className='hover:text-red-700' href='/menu'>Fried Chicken</a></li>
                                    <li className="text-lg  hover:text-red-700"><a className='hover:text-red-700' href='/menu'>Sweets</a></li>
                                    <li className="text-lg  hover:text-red-700"><a className='hover:text-red-700' href='/menu'>Main Course</a></li>
                                </ul>
                            </li>
                            <li className="text-lg "><a href='/about'>About us</a></li>
                        </ul>
                    </div>
                    <a className="p-0" href="/">
                        <img src={logom} alt="Logo" style={{ width: '160px', height: '140px' }} className="object-contain" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex items-center h-full"> {/* Ensure the center section takes full height */}
                    <ul className="menu menu-horizontal px-1 w-full flex justify-center"> {/* Full width and centered items */}
                        <li className="text-lg "><a href="/">Discount Card</a></li>
                        <li>
                            <details>
                                <summary className="text-lg">Today's Menu</summary>
                                <ul className="w-[200px] flex flex-col items-center"> {/* Adjusted width and centered items */}
                                    <li className="text-lg "><a  href='/menu' >Soups</a></li>
                                    <li className="text-lg "><a href='/menu' >Paneer Tikka</a></li>
                                    <li className="text-lg "><a  href='/menu'>Veggies</a></li>
                                    <li className="text-lg "><a href='/menu' >Fried Chicken</a></li>
                                    <li className="text-lg "><a href='/menu' >Sweets</a></li>
                                    <li className="text-lg "><a href='/menu' >Main Course</a></li>
                                </ul>
                            </details>
                        </li>
                        <li className="text-lg "><a href='/about'>SPIZE BBQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center h-full"> {/* Ensure the end section takes full height */}
                <a 
                href='/contact' 
                className="btn rounded-2xl flex items-center gap-2 px-6" 
                style={{ backgroundColor: '#FF6500', color: '#ffffff' }} // Set the background and text color
                >
                <BiPhoneCall />DELIVERY / TAKEAWAY
                </a>
                <a 
                href='/contact' 
                className="btn rounded-xl flex items-center gap-2 px-6 m-2" 
                style={{ backgroundColor: '#FF6500', color: '#ffffff' }} // Set the background and text color
                >
                <BiPhoneCall />BOOK NOW
                </a>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
