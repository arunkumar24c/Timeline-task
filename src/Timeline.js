import React from "react";
import img from "./assest/12079893_4905879 1.png";
import img1 from "./assest/12704415_5006160 1.png"
import img2 from "./assest/12893227_5101970 1.png";
import img3 from "./assest/Take Away-pana 1.png";


const Timeline = () => {
  return (
    <div className="container xl:hidden lg:hidden bg-white mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute  h-full border"
          style={{ left: "50%" }}
        ></div>
        {/* left timeline */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-4 h-4 rounded-full"></div>
          <div className="order-1 rounded-lg flex flex-col justify-center items-center w-5/12 px-[0.5rem] py-4">
            <h3 className="mb-3 text-center font-bold text-black text-xs">
              Search service
            </h3>
            <img src={img} className="w-[120px] h-[100px]" />
          </div>
        </div>
        {/* right timeline */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-4 h-4 rounded-full"></div>
          <div className="order-1 flex flex-col justify-center items-center rounded-lg  w-5/12 px-[0.5rem] py-4">
            <img src={img1} className="w-[120px] h-[100px]" />
            <h3 className="mb-3 text-center font-bold text-black text-xs ">
              Book service
            </h3>
          </div>
        </div>

        {/* left timeline */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-4 h-4 rounded-full"></div>
          <div className="order-1 flex flex-col justify-center items-center rounded-lg  w-5/12 px-[0.5rem] py-4">
            <h3 className="mb-3 font-bold text-center text-black text-xs">
              Customer care will confirm
              <br /> your booking
            </h3>
            <img src={img2} className="w-[120px] h-[100px]" />
          </div>
        </div>
        {/* right timeline */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-4 h-4 rounded-full"></div>
          <div className="order-1 flex flex-col justify-center items-center rounded-lg w-5/12 px-[0.5rem] py-4">
            <img src={img3} className="w-[120px] h-[100px]" />
            <h3 className="mb-3 text-center font-bold text-black text-xs ">
              Our service guy will
              <br /> visit
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
