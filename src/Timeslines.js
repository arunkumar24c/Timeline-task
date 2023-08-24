import React from "react";
import img from "./assest/12079893_4905879 1.png";
import img1 from "./assest/12704415_5006160 1.png";
import img2 from "./assest/12893227_5101970 1.png";
import img3 from "./assest/Take Away-pana 1.png";
import Timeline from "./Timeline";

const Timeslines = () => {
  return (
    <div>
      <div className="p-10 hidden xl:block lg:block">
        <h1 className="text-black font-medium text-xl text-center">
          Service Journey
        </h1>

        <div className="container flex items-center justify-center w-full h-[611px] relative mx-auto">
          <div>
            <hr className="w-[80rem] border-black xl:w-[80rem] lg:w-[60rem]" />
            <div className="absolute top-[18.6rem] left-[-1px]">
              <div className=" absolute left-16 rounded-full w-4 h-4 bg-black"></div>
              <div className=" flex flex-col items-center justify-center mt-7">
                <p className=" font-bold">Search service</p>
                <img src={img} className="w-[10rem]" />
              </div>
            </div>
            <div className=" absolute lg:top-[8.6rem] lg:left-[18rem] xl:top-[8.7rem] xl:left-[24rem]">
              <div className=" flex flex-col items-center justify-center mb-5">
                <img src={img1} className="w-[10rem]" />
                <p className="text-center font-bold">Book Service</p>
              </div>
              <div className=" absolute left-16 rounded-full w-4 h-4 bg-black"></div>
            </div>
            <div className=" absolute bottom-[5.9rem] lg:right-[22rem] right-[24rem]">
              <div className="absolute left-16  rounded-full w-4 h-4 bg-black"></div>
              <div className=" flex flex-col items-center justify-center mt-7">
                <p className="text-center font-bold">
                  Customer care will confirm
                  <br /> your booking
                </p>
                <img src={img2} className="w-[10rem]" />
              </div>
            </div>
            <div className=" absolute top-[7.5rem] right-11">
              <div className=" flex flex-col items-center justify-center mb-3 ">
                <img src={img3} className="w-[10rem]" />
                <p className="text-center font-bold">
                  Our service guy will
                  <br /> visit{" "}
                </p>
              </div>
              <div className=" absolute left-16 rounded-full w-4 h-4 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      <Timeline />
    </div>
  );
};

export default Timeslines;
