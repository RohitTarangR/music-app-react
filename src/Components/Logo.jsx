import React from "react";
import { logo } from "../data";

const Logo = () => {
  return (
    <>
      <section id="logo" className="py-10">
        <div className="flex justify-center space-x-5 flex-wrap">
          {logo.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.imgUrl} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Logo;
