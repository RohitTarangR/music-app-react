import React from 'react'
import star from "../assets/img/rating/Star.png"
import { bestSellerProduct } from '../data';


const BestSeller = () => {
    const numberOfStars = 5
  return (
    <>
      <section id="bestSeller" className="py-24">
        <h2 className="text-3xl font-semibold text-center pb-10">
          Best Seller
        </h2>
        <div className="flex justify-center gap-7 mx-auto flex-wrap max-w-[1400px]">
          {bestSellerProduct.map((item, index) => {
            return (
              <div className="relative" key={index}>
                <div className="w-64">
                  <img
                    src={item.imgUrl}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="details space-y-1 pt-2 border border-zinc-100 p-2">
                  <div className="rating flex gap-1">
                    {Array.from({ length: numberOfStars }, (index) => (
                      <img key={index} src={star} alt="star" />
                    ))}
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className='text-sm'>{item.subTitle}</p>
                  <p  className='font-semibold'>${item.price}</p>
                  <span className="absolute top-2 left-4 bg-white px-2 py-1 rounded-xl font-semibold border border-zinc-100">
                    New
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default BestSeller