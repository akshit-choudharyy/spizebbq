import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Bannerbig from "../assets/backgroundbanner.mp4";
import rotatingimage from "../img/hero.png";

function Banner() {
  return (
    <div className="relative w-full">
       <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
        <source src={Bannerbig} type="video/mp4" />
      </video>
      
      
      <div className="relative z-10 h-screen flex justify-center border"> 
        <div className="max-w-screen-2xl w-full xl:px-20 px-4 mx-auto flex flex-col md:flex-row py-12 md:py-24 items-center gap-8 relative">
          <div className="w-full md:w-1/2 space-y-7 px-4 text-center md:text-left flex flex-col items-center md:items-start mt-32 md:mt-0">
            {/* Text */}
            {/* <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-white">
              Enjoy Your Richest Buffet !
              <span className="text-yellow px-2"></span>
            </h2>
            <p className="text-base md:text-xl text-white">
              where traditional recipes meet modern culinary . <br/>
              Or Enjoy with your friends...
            </p> */}
            {/* <a href="/menu">
              <button className="btn rounded-2xl flex items-center  "
              style={{ backgroundColor: '#8e7015', color: '#ffffff' }}>
                BOOK YOUR TABLE
              </button>
            </a> */}
          </div>

          {/* Rotating Image */}
          <div className="relative w-96 h-96 md:w-100 md:h-100 ml-52"> {/* Increased size and added margin */}
            <img 
              src={rotatingimage} 
              alt="Hero" 
              className="absolute w-full h-full rounded-full"
              style={{ animation: 'spin 15s linear infinite' }} // Rotate continuously
            />
            <br/>
            <br/>
          </div>
        </div>
      </div>

      {/* Add CSS for rotation animation inline */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Banner;
