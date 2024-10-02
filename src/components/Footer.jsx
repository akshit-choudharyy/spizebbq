import React from 'react';
import z from "../assets/z.logomain.png";
import s from "../assets/s.png";
import main from "../img/spicelogo.png";

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 min-h-screen bg-[#FEFAE0] ">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 ">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company" className=" w-32 h-24 flex items-start object-cover">
            <img src={main} alt="" className='object-cover w-full h-full' />
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              We believe that food is more than just sustenance; it is an experience, a journey through culture and tradition. Our
              mission is to bring the authentic flavours of China to Delhi NCR, creating an unforgettable dining experience for our guests.
            </p>
            <p className="mt-4 text-sm text-gray-800"></p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900 mt-7  ">Company</p>
          <div className="flex">
            <a href="/about">
              <p className="mr-1 text-gray-800">About us</p>
            </a>
          </div>
          <div className="flex">
            <a href="/menu">
              <p className="mr-1 text-gray-800">Menu</p>
            </a>
          </div>
          <div className="flex">
            <a href="/contact">
              <p className="mr-1 text-gray-800">Contact us</p>
            </a>
          </div>
        </div>
        <div className=' text-center mt-7'>
          <span className="text-base font-bold tracking-wide text-gray-900 ">Order Now</span>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.zomato.com/ncr/spize-barbeque-hajipur-noida/order" className="flex items-center ">
              <img src={z} alt="Zomato" className='w-32 h-16 object-contain' />
            </a>
            <a href="https://www.swiggy.com/city/noida-1/spize-barbeque-h-block-sector-63-rest471177" className="flex items-center  ">
              <img src={s} alt="Swiggy" className='w-32 h-18 object-contain' />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between  pb-2 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 Spize BBQ Inc. All rights reserved.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
          </li>
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
          </li>
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Footer;
