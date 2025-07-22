import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const GuestNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-white border-b-[0.5px] border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[80px] py-4 flex justify-between items-center">
          <div className="text-xl font-semibold">Exclusive</div>

          <div className="hidden md:flex items-center gap-4 ">
            <Link to="/" className="border-b-1">
              Home
            </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign Up</Link>
          </div>

          <div className="hidden md:flex justify-around items-center gap-6">
            <div>
              <input
                type="search"
                placeholder="Search"
                className="px-3 py-2 rounded bg-gray-100 text-sm outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <CiHeart className="cursor-pointer" size={24} />
              <IoCartOutline className="cursor-pointer" size={24} />
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3">
            <Link to="/" className="block">
              Home
            </Link>
            <Link to="/contact" className="block">
              Contact
            </Link>
            <Link to="/about" className="block">
              About
            </Link>
            <Link to="/signup" className="block">
              Sign Up
            </Link>

            <div className="flex items-center gap-2">
              <input
                type="search"
                placeholder="Search"
                className="w-full px-3 py-2 rounded bg-gray-100 outline-0 text-sm"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <CiHeart className="cursor-pointer" size={32} />
              <IoCartOutline className="cursor-pointer" size={32} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default GuestNavbar;
