import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import img from '../images/heart.jpg'
import img2 from '../images/doc1.jpg'
import img3 from '../images/doc2.jpg'
import img4 from '../images/doc3.jpg'
import img5 from '../images/doc4.jpg'
import img6 from '../images/doc5.jpg'
import img7 from '../images/doc6.jpg'
const Doctor = () => {
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
      <div class="flex mb-[100px]">
        <div class="w-[650px]">
          <div class="flex items-center justify-center h-[500px] relative bg-[#c8102e] before-element">
            <div class="capitalize relative z-10 p-4 text-white font-lato font-bold text-[44px]">
              Meet our team
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="team" className=" h-[500px] ml-[100px] overflow-y-hidden w-[769px]" />
        </div>
      </div>

      <div className="second-section">
        <div className="content mx-20 flex justify-between">
          
        <div className="box w-[405px] h-[555px] bg-white bg-opacity-36 filter drop-shadow-[2px_2px_60px_rgba(200,16,46,0.20)] pt-[1px]">
          <div className="image h-[320px] w-[250px] my-[18px] mx-20 rounded-[40px] ">
            <img className='h-full w-full rounded-[40px]' src={img4} alt="" srcset="" />
          </div>
          <div className="doc-name">
            <p className='uppercase text-[#c8102e] text-center font-lato font-medium'>Dr. Nishan Shrestha, MBBS, MD</p>
            <p className='uppercase text-[#000] text-center font-lato font-medium pt-[12px]'>consultant cardiologist & head of department</p>
            <p className='uppercase text-[#000] text-center font-lato font-bold pt-[12px]'>nmc no. 5565</p>
            <div className="button flex justify-center mt-[10px]">
            <button className='w-[250px] h-[50px] border border-[#e4dada] text-[#c8102e] font-lato font-bold rounded-full '>Book Appointment</button>
            </div>
          </div>
        </div>

        <div className="box w-[405px] h-[555px] bg-white bg-opacity-36 filter drop-shadow-[2px_2px_60px_rgba(200,16,46,0.20)] pt-[1px]">
          <div className="image h-[320px] w-[250px] my-[18px] mx-20 rounded-[40px] ">
            <img className='h-full w-full rounded-[40px]' src={img2} alt="" srcset="" />
          </div>
          <div className="doc-name">
            <p className='uppercase text-[#c8102e] text-center font-lato font-medium'>Dr. ashlesha shrestha, MBBS, MD</p>
            <p className='uppercase text-[#000] text-center font-lato font-medium pt-[12px]'>CONSULTANT CARDIOLOGIST & ASSOCIATE PROFESSOR</p>
            <p className='uppercase text-[#000] text-center font-lato font-bold pt-[12px]'>nmc no. 6268</p>
            <div className="button flex justify-center mt-[10px]">
            <button className='w-[250px] h-[50px] border border-[#e4dada] text-[#c8102e] font-lato font-bold rounded-full '>Book Appointment</button>
            </div>
          </div>
        </div>

        <div className="box w-[405px] h-[555px] bg-white bg-opacity-36 filter drop-shadow-[2px_2px_60px_rgba(200,16,46,0.20)] pt-[1px]">
          <div className="image h-[320px] w-[250px] my-[18px] mx-20 rounded-[40px] ">
            <img className='h-full w-full rounded-[40px]' src={img6} alt="" srcset="" />
          </div>
          <div className="doc-name">
            <p className='uppercase text-[#c8102e] text-center font-lato font-medium'>Dr. Sanket shrestha, MBBS, MD</p>
            <p className='uppercase text-[#000] text-center font-lato font-medium pt-[12px]'>sr. consultant cardiologist</p>
            <p className='uppercase text-[#000] text-center font-lato font-bold pt-[12px]'>nmc no. 1654</p>
            <div className="button flex justify-center mt-[10px]">
            <button className='w-[250px] h-[50px] border border-[#e4dada] text-[#c8102e] font-lato font-bold rounded-full '>Book Appointment</button>
            </div>
          </div>
        </div>
        </div>

        <div className="content mx-20 mt-[50px] flex justify-between">
          
        <div className="box w-[405px] h-[555px] bg-white bg-opacity-36 filter drop-shadow-[2px_2px_60px_rgba(200,16,46,0.20)] pt-[1px]">
          <div className="image h-[320px] w-[250px] my-[18px] mx-20 rounded-[40px] ">
            <img className='h-full w-full rounded-[40px]' src={img5} alt="" srcset="" />
          </div>
          <div className="doc-name">
            <p className='uppercase text-[#c8102e] text-center font-lato font-medium'>Dr. ankit mahato, MBBS, MD</p>
            <p className='uppercase text-[#000] text-center font-lato font-medium pt-[12px]'>cardiologist</p>
            <p className='uppercase text-[#000] text-center font-lato font-bold pt-[12px]'>nmc no. 2225</p>
            <div className="button flex justify-center mt-[10px]">
            <button className='w-[250px] h-[50px] border border-[#e4dada] text-[#c8102e] font-lato font-bold rounded-full '>Book Appointment</button>
            </div>
          </div>
        </div>

        <div className="box w-[405px] h-[555px] bg-white bg-opacity-36 filter drop-shadow-[2px_2px_60px_rgba(200,16,46,0.20)] pt-[1px]">
          <div className="image h-[320px] w-[250px] my-[18px] mx-20 rounded-[40px] ">
            <img className='h-full w-full rounded-[40px]' src={img3} alt="" srcset="" />
          </div>
          <div className="doc-name">
            <p className='uppercase text-[#c8102e] text-center font-lato font-medium'>Dr. riya Shrestha, MBBS, MD</p>
            <p className='uppercase text-[#000] text-center font-lato font-medium pt-[12px]'>cardiologist </p>
            <p className='uppercase text-[#000] text-center font-lato font-bold pt-[12px]'>nmc no. 8198</p>
            <div className="button flex justify-center mt-[10px]">
            <button className='w-[250px] h-[50px] border border-[#e4dada] text-[#c8102e] font-lato font-bold rounded-full '>Book Appointment</button>
            </div>
          </div>
        </div>

        <div className="box w-[405px] h-[555px] bg-white bg-opacity-36 filter drop-shadow-[2px_2px_60px_rgba(200,16,46,0.20)] pt-[1px]">
          <div className="image h-[320px] w-[250px] my-[18px] mx-20 rounded-[40px] ">
            <img className='h-full w-full rounded-[40px]' src={img7} alt="" srcset="" />
          </div>
          <div className="doc-name">
            <p className='uppercase text-[#c8102e] text-center font-lato font-medium'>Dr. Ram tamang, MBBS, MD</p>
            <p className='uppercase text-[#000] text-center font-lato font-medium pt-[12px]'>cardiologist</p>
            <p className='uppercase text-[#000] text-center font-lato font-bold pt-[12px]'>nmc no. 3579</p>
            <div className="button flex justify-center mt-[10px]">
            <button className='w-[250px] h-[50px] border border-[#e4dada] text-[#c8102e] font-lato font-bold rounded-full '>Book Appointment</button>
            </div>
          </div>
        </div>
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default Doctor