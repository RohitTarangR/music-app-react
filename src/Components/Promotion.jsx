import React from 'react'
import hurryup from "../assets/img/hurryup.jpg"
import Countdown from './CountDown';

const Promotion = () => {
  return (
    <section id="promotion">
      <div className="grid grid-cols-2 max-xl:grid-cols-1">
        <div>
          <img
            src={hurryup}
            alt=""
            width={"100%"}
            className="h-full object-cover"
          />
        </div>
        <div className="bg-[#ffcc5f] flex flex-col justify-center items-start px-24 space-y-5 max-xl:py-10 max-lg:items-center">
          <p className="text-blue-500 font-bold text-xl uppercase max-md:text-lg">
            Promotion
          </p>
          <h3 className="text-5xl text-center font-semibold max-lg:text-4xl max-md:text-3xl">
            Hurry up! 40% OFF
          </h3>
          <p className='text-center'>Thousands of high tech are waiting for you</p>
          <Countdown />
          <button className="bg-black text-white w-44 h-10 font-semibold rounded-lg text-sm max-lg:w-32 max-lg:text-xs">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Promotion