import React from "react";
import img1 from "../assets/img/shop_collection/p1.png"
import img2 from "../assets/img/shop_collection/p2.png"
import img3 from "../assets/img/shop_collection/p3.png"
import { EastOutlined } from "@mui/icons-material/";

const ShopCollection = () => {
  return (
    <>
      <section id="shopCollection">
        <h2 className="text-3xl font-semibold text-center py-10">
          Shop Collection
        </h2>
        <div className="flex justify-center space-x-5 flex-wrap ">
          <div className="relative">
            <img src={img1} alt="img" />
            <div className="absolute bottom-5 left-5">
              <p className="text-2xl font-bold">Headband</p>
              <button className="flex items-center underline underline-offset-4">
                Collection <EastOutlined />
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <div className="relative">
              <img src={img2} alt="img" />
              <div className="absolute bottom-5 left-5">
                <p className="text-2xl font-bold">Earbuds</p>
                <button className="flex items-center underline underline-offset-4">
                  Collection <EastOutlined />
                </button>
              </div>
            </div>
            <div className="relative">
              <img src={img3} alt="img" />
              <div className="absolute bottom-5 left-5">
                <p className="text-2xl font-bold">Accessories</p>
                <button className="flex items-center underline underline-offset-4">
                  Collection <EastOutlined />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCollection;
