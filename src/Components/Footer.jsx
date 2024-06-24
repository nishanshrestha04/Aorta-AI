import React, { useState } from "react";
import { Link } from "react-router-dom";
import img9 from "../images/icon.png";
import img10 from "../images/Logo.png";

const Footer = () => {
const [name, setname] = useState('')
const [email, setemail] = useState('')
const submitHandler = (e) => {
  e.preventDefault();
  setname("");
  setemail("");
};
  return (
    <div>
      <div className="third-section w-full h-[445px] bg-[#EDF1F4] mt-24 flex flex-col items-center">
        <img src={img9} alt="" srcset="" className="w-[101px] h-[65px] mt-12" />
        <h1 className="capitalize font-lato font-bold text-3xl my-12 text-[#1B365D]">
          Keep up to date with heart health tips, & latest news
        </h1>

        <form action="#" id="subscribe" className="flex gap-16" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="First Name"
            required
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="font-lato text-[16px] w-[365px] h-[40px] rounded-full px-4 py-2 focus:outline-none "
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Email Address"
            required
            className="font-lato text-[16px] w-[365px] h-[40px] rounded-full px-4 py-2 focus:outline-none"
          />
        </form>
        <button
          type="submit"
          form="subscribe"
          value="submit"
          className="font-lato bg-[#c8102e] text-white w-[186px] h-[50px] rounded-full mt-[50px] hover:bg-[#982f2f] transition-all duration-300 "
        >
          Subscribe
        </button>
      </div>

      <div className="footer w-full h-[480px] bg-[#c8102e] ">
        <div className="flex justify-between">
          <div className="first_footer pt-10">
            <img src={img10} className="w-24 h-24 ml-[110px]" />
            <p className="capitalize font-lato pt-5 ml-20 text-white">
              every heartbeat matters
            </p>
            <p className="capitalize font-lato pt-5 ml-20 text-white w-[462px] ">
              Take the first step towards understanding your heart health with
              our AI-powered platform. Gain insights and early detection
              possibilities to empower your well-being. Start your journey
              today.
            </p>
          </div>
          <div className="second flex mr-12 gap-20 mt-[148px]">
            <div className="first">
              <Link to='/'><p className="text-xl font-lato font-bold capitalize text-white">about</p></Link>
              <Link to='/dashboard'><p className="text-xl font-lato font-bold capitalize text-white pt-8">dashboard</p></Link>
              <Link to='/doctor'><p className="text-xl font-lato font-bold capitalize text-white pt-8">book doctor</p></Link>
            </div>
            <div className="second">
              <p className="text-xl font-lato font-bold capitalize text-white">get in touch</p>
              <p className="text-xl font-lato font-bold capitalize text-white pt-8">general contact</p>
              <p className="text-xl font-lato font-bold capitalize text-white pt-8">media contact</p>
            </div>
            <div className="thirs">
              <p className="text-xl font-lato font-bold capitalize text-white">privacy notice</p>
              <p className="text-xl font-lato font-bold capitalize text-white pt-8">terms and conditions</p>
              <p className="text-xl font-lato font-bold capitalize text-white pt-8">policy</p>
            </div>
          </div>
        </div>
        <hr className="mt-[60px] border-[2px] mx-20" />
        <div className="lower-footer flex justify-between items-center">
          <div className="icons flex gap-5 ml-20 pt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="56"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="56"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
          </div>

          <p className="font-lato font-bold text-white mr-20 pt-10">
            &copy; 2024 aorta-ai, inc.all right preserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
