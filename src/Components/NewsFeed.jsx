import React from 'react'
import { newsFeedImg } from '../data';

const NewsFeed = () => {
  return (
    <>
      <section
        id="newsFeed"
        className="flex flex-col justify-center items-center text-center space-y-6 py-10"
      >
        <p className="uppercase text-gray-600 font-bold">newsFeed</p>
        <p className="text-5xl font-semibold">Instagram</p>
        <p>Follow Us On Social Media For More Discount & Promotions</p>
        <p className="text-gray-600 font-bold tracking-wide">@3legant_official</p>
        <div className="flex justify-center items-center flex-wrap">
          {newsFeedImg.map((item) => {
            return (
            <div className='hover:brightness-75 transition-all duration-300 ease-in-out mx-3 my-3'>
            <img src={item.imgUrl} key={item.id} alt="" />
            </div>
            
            );
          })}
        </div>
      </section>
    </>
  );
}

export default NewsFeed