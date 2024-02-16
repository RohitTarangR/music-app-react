import React from 'react'

const Banner = () => {
  return (
    <section id="banner" className="flex justify-center items-center">
      <div className="flex flex-col text-start space-y-5 ml-[70vh] mb-44">
        <h1 className="text-6xl font-bold leading-normal">
          Listen to <br />
          the <span className='text-blue-500'> amazing </span>
           <br /> music sound
        </h1>
        <p className='font-medium'>Experience music like never before</p>
        <button className="text-center bg-black text-white w-44 h-10 rounded-md">Shopping Now</button>
      </div>
    </section>
  );
}

export default Banner