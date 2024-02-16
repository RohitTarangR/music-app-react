import React from 'react'
// import { shopFeatures } from '../data'
import { LocalShippingOutlined } from '@mui/icons-material'


const Features = () => {
  return (
    <>
      <section id="features" className="flex justify-center space-x-5">
        {/* <div className="flex justify-center space-x-5"> */}

        {
          shopFeatures.map((item,index)=>{
            return (
              <div
                className="space-y-3 flex- flex-col justify-center items-start"
                key={index}>
                {/* <p className="font-semibold">{item.iconComponent}</p> */}
                <p>{item.fText}</p>
                <p>{item.desc}</p>
              </div>
            );
          })
        }

        {/* </div> */}
      </section>
    </>
  );
}

export default Features