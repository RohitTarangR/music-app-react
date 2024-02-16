import React from "react";
import logo from "../assets/img/Logo-white.png";
import {
  Facebook,
  FacebookOutlined,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10 space-y-5">
        <div className="flex justify-between items-center pb-5 px-44 max-xl:text-sm max-xl:px-28 max-lg:flex-col max-lg:space-y-5">
          <div className="flex space-x-5 items-center max-md:flex-col ">
            <span></span>
            <img src={logo} alt="" className="max-md:mb-5" />
            <div className="w-[2px] h-5 bg-white max-md:hidden"></div>
            <a href="">HeadPhone Store</a>
          </div>
          <div className="space-x-5 max-md:flex max-md:flex-col max-md:items-center max-md:space-y-5 max-md:mx-auto">
            <a href=""></a>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Product</a>
            <a href="">Blog</a>
            <a href="">Contact Us</a>
          </div>
        </div>
        <hr className="w-4/5 mx-auto " />

        <div className="flex justify-between items-center py-2 px-60 text-sm max-xl:px-32 max-lg:flex-col-reverse max-lg:px-14">
          <div className="flex space-x-5 max-lg:flex-col-reverse items-center">
            <p>Copyright © 2023 3legant. All rights reserved</p>
            <div className="flex space-x-5 max-lg:mb-5">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 max-lg:mb-5">
            <Instagram />
            <FacebookOutlined />
            <YouTube />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
