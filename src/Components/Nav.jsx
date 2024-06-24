import React from "react";
import img from "../images/aorta.png";
import { Link } from "react-router-dom";  

const Nav = () => {
  return (
    <div className="h-[160px] flex items-center justify-between">
      <div className="logo flex items-center">
        <img src={img} alt="logo" className="h-[127px] w-[125px] ml-20 " />
      </div>
      <div className="nav-items font-lato font-bold  text-[#5e5e5e] tracking-wide">
        <ul className="flex gap-[120px] text-[16px] h-full">
        <Link to='/' className="cursor-pointer relative after:content-[''] after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:border-b-4 after:rounded-full after:border-[#c8102e] after:left-0 after:-bottom-5 hover:text-[#c8102e]"><li >
          About Us
          </li></Link>
          <Link to='/dashboard' className="cursor-pointer relative after:content-[''] after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:border-b-4 after:rounded-full after:border-[#c8102e] after:left-0 after:-bottom-5 hover:text-[#c8102e]"><li > Dashboard </li></Link>
         <Link to='/doctor'><div className="w-[150px] h-[43px] -mt-3 bg-[#c8102e] text-white flex justify-center items-center rounded-full mr-[150px] hover:bg-[#982f2f] transition-all duration-300">
            <li>Book Doctor</li>
          </div></Link> 
        </ul>
      </div>
    </div>
  );
};

export default Nav;
