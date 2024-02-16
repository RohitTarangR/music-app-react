import React from 'react'
import {
  LocalShippingOutlined,
  LocalAtmOutlined,
  LockOutlined,
  CallOutlined,
} from "@mui/icons-material";


const Features = () => {
  return (
    <>
      <section id="features" className="flex justify-center flex-wrap space-x-5 pt-16">
        <span></span>
        <div className="space-y-3 flex- flex-col justify-center items-start bg-[#f2f5f6] w-64 h-44 px-5 py-10 my-3">
          <p className="font-bold">
            <LocalShippingOutlined className='scale-125' />
          </p>
          <p className="font-bold text-xl">Free Shipping</p>
          <p>Order above $200</p>
        </div>
        <div className="space-y-3 flex- flex-col justify-center items-start bg-[#f2f5f6] w-64 h-44 px-5 py-10 my-3">
          <p className="font-bold">
            <LocalAtmOutlined className='scale-125' />
          </p>
          <p className="font-bold text-xl">Money-Back</p>
          <p>30 days guarantee</p>
        </div>
        <div className="space-y-3 flex- flex-col justify-center items-start bg-[#f2f5f6] w-64 h-44 px-5 py-10 my-3">
          <p className="font-bold">
            <LockOutlined className='scale-125' />
          </p>
          <p className="font-bold text-xl">Secure Payments</p>
          <p>Secured by Stripe</p>
        </div>
        <div className="space-y-3 flex- flex-col justify-center items-start bg-[#f2f5f6] w-64 h-44 px-5 py-10 my-3">
          <p className="font-bold">
            <CallOutlined className='scale-125' />
          </p>
          <p className="font-bold text-xl">24/7 Support</p>
          <p>Phone and Email Support</p>
        </div>
      </section>
    </>
  );
}

export default Features