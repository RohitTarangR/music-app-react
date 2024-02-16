import React from 'react'
import { EmailOutlined } from "@mui/icons-material/";

const NewsLetter = () => {
  return (
    <>
      <section id="newsLetter" className='flex flex-col justify-center items-center text-center'>
        <h3 className='text-4xl font-medium'>Join Our NewsLetter</h3>
        <p className='text-base py-5'>Sign up for deals, new products and promotions</p>
        <div className='flex py-1 items-center justify-center'>
            <EmailOutlined className='text-gray-800' />
            <input type="email" name="email" id="email" className='outline-none bg-inherit w-64 p-5 h-10' placeholder='Email Address'/>
            <button className='text-gray-500'>Sign Up</button>
        </div>
        <hr className='h-[0.11em] bg-black w-[390px]' />
      </section>
    </>
  );
}

export default NewsLetter