import React from "react";
import { GoStarFill } from "react-icons/go";
const OurProduct = () => {
  return (
    <div>
      <div className="flex justify-center gap-3">
        <div>
          <div className="">
            <img className="w-[270px] h-[250px]" src="anh6.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">Breed Dry Dog Food</p>
            <div className="flex">
              <div className="mt-2">
                <span className="text-red-600 ">$100</span>
              </div>
              <div className=" flex mt-3 mb-8 ml-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="">
            <img className="w-[270px] h-[250px]" src="anh7.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">CANON EOS DSLR Camera</p>
            <div className="flex">
              <div className="mt-2">
                <span className="text-red-600 ">$360</span>
              </div>
              <div className=" flex mt-3 mb-8 ml-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="">
            <img className="w-[270px] h-[250px]" src="anh8.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">ASUS FHD Gaming Laptop</p>
            <div className="flex">
              <div className="mt-2">
                <span className="text-red-600 ">$700</span>
              </div>
              <div className=" flex mt-3 mb-8 ml-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="">
            <img className="w-[270px] h-[250px]" src="anh9.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">Curology Product Set </p>
            <div className="flex">
              <div className="mt-2">
                <span className="text-red-600 ">$500</span>
              </div>
              <div className=" flex mt-3 mb-8 ml-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////////////////// */}
      <div className="flex justify-center gap-3">
        <div>
          <div className="">
            <img className="w-[270px] h-[250px]" src="anh10.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">Kids Electric Car</p>
            <div className="flex">
              <div className="mt-2">
                <span className="text-red-600 ">$960</span>
              </div>
              <div className=" flex mt-3 mb-8 ml-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="">
            <img className="w-[270px] h-[250px]" src="anh11.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">Jr. Zoom Soccer Cleats</p>
            <div className="flex">
              <div className="mt-2">
                <span className="text-red-600 ">$1160</span>
              </div>
              <div className=" flex mt-3 mb-8 ml-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="">
            <img className="w-[270px] h-[250px]" src="anh12.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">GP11 Shooter USB Gamepad</p>
            <div className="flex">
              <div className="mt-2">
                <span className="text-red-600 ">$660</span>
              </div>
              <div className=" flex mt-3 mb-8 ml-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="">
            <img className="w-[270px] h-[250px]" src="anh13.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">Quilted Satin Jacket</p>
            <div className="flex">
              <div className="mt-2">
                <span className="text-red-600 ">$660</span>
              </div>
              <div className=" flex mt-3 mb-8 ml-2">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="w-[200px] h-[80px]border-solid border-2 border-red-600 bg-red-700 rounded-md ml-[500px] mt-[50px] mb-[50px] text-yellow-50">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OurProduct;
