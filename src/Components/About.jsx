import React from "react";
import { Link } from "react-router-dom";
import img from "../images/file.png";
import img2 from "../images/heart.png";
import img3 from "../images/team.jpg";
import img4 from '../images/sanket.jpeg'
import img5 from '../images/nishan.jpg'
import img6 from '../images/Ashlesha.jpg'
import img7 from '../images/Riya.jpg'
import img8 from '../images/ankit.jpg'
import Nav from "./Nav";
import Footer from "./Footer";
const About = () => {

  const styles = `
    .before-element::before {
      content: '';
      position: absolute;
      top: 0;
      left: 200px;
      width: 100%;
      height: 100%;
      background-color: #c8102e;
      clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
      z-index: 1; /* Updated z-index value */
    }
  `;

  return (
    <div>
      <Nav />
      <style>{styles}</style>
      <div class="first-section flex">
        <div class="out-project w-[650px]">
          <div class="flex items-center justify-center h-[500px] relative bg-[#c8102e] before-element">
            <div class="relative z-10 p-4 text-white font-lato text-[44px]">
              Our Project
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="" srcset="" className=" h-[500px] ml-[300px]" />
        </div>
      </div>

      <div>
        <h1 className="capitalize font-lato text-[32px] ml-[110px] mt-[50px] font-bold">An AI Based heart disease preciction</h1>
        <div className="para flex gap-[280px]">
        <p className="ml-[160px] w-[580px] pt-[20px] text-[18px] ">Are you concerned about your heart but lack access to doctor? Our AI-Powered platform offers accessible heart prediction, using ML to analyze data and assess your risk. While not a replacement for professional medical advice, we provide a valuable first step towards understanding your heart health, empowering you with knowledge and early detection possibilities. Take control of your well-being and explore the potential of AI in preventative heart care today.</p>
        <img src={img2} className="w-[400px] h-[450px] -mt-[100px] gap-[280px] " />
        </div>
        <Link to='/dashboard'>
        <button className="rect flex justify-center items-center font-lato text-[24px] text-white font-bold w-[220px] h-[70px] ml-[160px] -mt-[120px] cursor-pointer transition-all duration-500 bg-[#c8102e] rounded-full hover:bg-[#982f2f]">Try For Free</button></Link>
      </div>
      <div class="flex mt-[100px]">
        <div class="w-[650px]">
          <div class="flex items-center justify-center h-[500px] relative bg-[#c8102e] before-element">
            <div class="capitalize relative z-10 p-4 text-white font-lato font-bold text-[44px]">
              Meet our team
            </div>
          </div>
        </div>
        <div>
          <img src={img3} alt="team" className=" h-[500px] ml-[100px] overflow-y-hidden w-[769px]" />
        </div>
      </div>
      
      <div className="flex mx-20 justify-between mt-[50px]">
        <div className="w-[405px] h-[452px] bg-[#dfe2e3] rounded-[10px] flex justify-center">
          <div className="w-[230px] h-[226px] mt-5 rounded-full">
            <img src={img4} alt="sanket" className="w-[230px] h-[226px] rounded-full" />
            <p className="-ml-12 mt-[12px]  text-[#c8102e] font-lato text-[16px] ">Sanket Shrestha</p>
          </div>
        </div>

        <div className="w-[405px] h-[452px] bg-[#dfe2e3] rounded-[10px] flex justify-center">
          <div className="w-[230px] h-[226px] mt-5 rounded-full">
            <img src={img5} alt="nishan"  className="w-[230px] h-[226px] rounded-full" />
            <p className="-ml-12 mt-[12px] text-[#c8102e] font-lato text-[16px] ">Nishan Shrestha</p>
          </div>
        </div>

        <div className="w-[405px] h-[452px] bg-[#dfe2e3] rounded-[10px] flex justify-center">
          <div className="w-[230px] h-[226px] mt-5 rounded-full">
            <img src={img6} alt="ashlesha"  className="w-[230px] h-[226px] rounded-full" />
        <p className="-ml-12 mt-[12px] text-[#c8102e] font-lato text-[16px] ">Ashlesha Shrestha</p>
          </div>
        </div>

      </div>
      
      <div className="lower-profile flex mx-20 justify-center gap-20 mt-[48px]">
        <div className="w-[405px] h-[452px] bg-[#dfe2e3] rounded-[10px] flex justify-center">
          <div className="w-[230px] h-[226px] mt-5 rounded-full">
            <img src={img7} alt="riya" className="w-[230px] h-[226px] rounded-full" />
            <p className="-ml-12 mt-[12px]  text-[#c8102e] font-lato text-[16px] ">Riya Shrestha</p>
          </div>
        </div>

        <div className="w-[405px] h-[452px] bg-[#dfe2e3] rounded-[10px] flex justify-center">
          <div className="w-[230px] h-[226px] mt-5 rounded-full">
            <img src={img8} alt="ankit"  className="w-[230px] h-[226px] rounded-full" />
            <p className="-ml-12 mt-[12px] text-[#c8102e] font-lato text-[16px] ">Ankit Mahato</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
