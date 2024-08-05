import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-white text-black mt-5 mb-7">
      <div className="w-[80%] flex justify-between mx-auto ">
        <h1 className="font-medium">Exclusive</h1>
        <div className="text-right  ">
          <ul>
            <li className="flex gap-10">
              <Link to="/">Home</Link>
              <Link to="/products/about">About</Link>
              <Link to="/products/notfound">Contact</Link>
              <Link to="/products/Signin">Sign in</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input type="text" placeholder="What are you looking for?" />
            <IoIosSearch />
          </div>

          <div>
            <BiHeart />
          </div>
          <div>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
