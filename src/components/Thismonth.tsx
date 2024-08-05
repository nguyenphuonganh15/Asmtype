import { GoStarFill } from "react-icons/go";
const Thismonth = () => {
  return (
    <div className="mt-8">
      <div className="flex ">
        <div className="font-black ml-9">
          <h1>Best Selling Products</h1>
        </div>

        <div className=" w-[80px] h-[40px]border-solid border-2 border-red-600 bg-red-700 rounded-md ml-[860px] text-yellow-50">
          <button className="justify-center">View All</button>
        </div>
      </div>

      {/*  */}
      <div className=" flex gap-6 justify-center mt-11">
        <div>
          <div className="">
            <img className="w-[250px] h-[250px]" src="anh2.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">The north coat</p>
            <div className="mt-2">
              <span className="text-red-600 ">$120</span>
              <span className="line-through ml-3">$360</span>
            </div>
            <div className=" flex mt-3 mb-8">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="">
            <img className="w-[250px] h-[250px]" src="anh3.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">Gucci duffle bag</p>
            <div className="mt-2">
              <span className="text-red-600 ">$960</span>
              <span className="line-through ml-3">$1160</span>
            </div>
            <div className=" flex mt-3 mb-8">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="">
            <img className="w-[250px] h-[250px]" src="anh4.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">RGB liquid CPU Cooler</p>
            <div className="mt-2">
              <span className="text-red-600 ">$160</span>
              <span className="line-through ml-3">$170</span>
            </div>
            <div className=" flex mt-3 mb-8">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="">
            <img className="w-[250px] h-[250px]" src="anh5.jpg" alt="" />
          </div>
          <div>
            <p className="mt-5">Small BookSelf</p>
            <div className="mt-2">
              <span className="text-red-600 ">$360</span>
            </div>
            <div className=" flex mt-3 mb-8">
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

      <div className="flex justify-center">
        {" "}
        <img
          className="w-[1080px] h-[500px]  mt-5 mb-8"
          src="banner2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Thismonth;
