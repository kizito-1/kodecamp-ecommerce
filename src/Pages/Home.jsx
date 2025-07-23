import React from "react";
import { RxCaretRight } from "react-icons/rx";
import hero from "../assets/images/iphone.jpg"
import { IoLogoApple } from "react-icons/io5";


const Home = () => {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full max-w-7xl px-[80px] gap-[50px]">
        {/* Sidebar */}
        <div className="w-full lg:w-1/6 border-r border-gray-300">
          <div className="pt-9">
            <ul className="space-y-4 text-sm me-3">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="flex justify-between items-center cursor-pointer"
                >
                  {cat}
                  {cat.includes("Fashion") && <RxCaretRight size={20} />}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Banner */}
        <div className="w-full bg-black text-white relative overflow-hidden mt-9">
          <div className="flex flex-col lg:flex-row justify-between p-8">
            {/* Text Content */}
            <div className="flex flex-col justify-center gap-4 max-w-md">
              <div className="flex items-center gap-4">
                <IoLogoApple  size={45}/>
                <span>iPhone 14 Sries</span>
              </div>
              <h2 className="text-6xl font-semibold leading-tight">
                Up to 10% off Voucher
              </h2>
              <button className="w-fit py-2 border-b text-white">
                Shop Now →
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src={hero}
                alt="iPhone"
                className="max-h-64 object-contain"
              />
            </div>
          </div>

          {/* Slider Dots (static for now) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="w-2 h-2 rounded-full bg-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
