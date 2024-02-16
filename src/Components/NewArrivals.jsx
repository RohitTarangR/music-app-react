import React from 'react'
import star from "../assets/img/rating/Star.png"
import { newArrivalsProduct } from '../data'


const NewArrivals = () => {

    const numberOfStars = 5

    return (
    <>
      <section id="newArrivals" className='py-5'>
        <h2 className='text-3xl font-semibold text-center pb-10'>New Arrivals</h2>
        <div className='flex justify-center space-x-10 mx-auto flex-wrap'>

        {
            newArrivalsProduct.map((item,index)=>{
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
                      <div className="rating flex">
                        {Array.from({ length: numberOfStars }, (index) => (
                          <img key={index} src={star} alt="star" />
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p>{item.subTitle}</p>
                      <p>${item.price}</p>
                      <span className="absolute top-2 left-4 bg-white px-2 py-1 rounded-xl font-semibold border border-zinc-100">
                        New
                      </span>
                    </div>
                  </div>
                );
            })
        }
        </div>

      </section>
    </>
  );
}

export default NewArrivals