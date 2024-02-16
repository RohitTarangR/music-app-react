import React from 'react'
import {
  ConfirmationNumberOutlined,
  ArrowForward,
  SearchOutlined,
  AccountCircleOutlined,
  ShoppingBagOutlined,
  KeyboardArrowDownOutlined,
  MenuOutlined,
} from "@mui/icons-material/";
import logo from "../assets/img/Logo.png"

const Header = () => {

  return (
    <>
      <header className='shadow-md shadow-black'>
        <div className="offer bg-black flex justify-center items-center text-white space-x-2 py-2">
          <div>
            <ConfirmationNumberOutlined />
          </div>
          <p>30% off storewide — Limited time!</p>
          <button className="flex items-center text-yellow-400 underline text-sm underline-offset-4">
            Shop Now
            <div>
              <ArrowForward />
            </div>
          </button>
        </div>

        <nav className="bg-[#ffcb5d] text-black flex justify-around items-center py-5 px-36 max-md:justify-between max-md:px-5 max-lg:px-16">
          <div className="logo flex items-center space-x-2">
            <div className="hidden max-md:inline-block">
              <MenuOutlined />
            </div>
            <img src={logo} alt="" />
          </div>
          <div className="flex space-x-5 items-center max-md:hidden">
            <a href="">Home</a>
            <a href="">
              Shop <KeyboardArrowDownOutlined />
            </a>
            <a href="">
              Product <KeyboardArrowDownOutlined />
            </a>
            <a href="">Contact Us</a>
          </div>
          <div className="flex space-x-1">
            <SearchOutlined />
            <AccountCircleOutlined />
            <ShoppingBagOutlined />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header