import { GoStarFill } from "react-icons/go";

const Homepage = () => {
  return (
    <div>
      <div className="flex mb-[200px]">
        <div className="w-[100px] h-[140px] items-center ml-[50px] gap-[20px]">
          <div>
            <img src="ct1.jpg" alt="" />
          </div>
          <div>
            <img src="ct2.jpg" alt="" />
          </div>
          <div>
            <img src="ct3.jpg" alt="" />
          </div>
          <div>
            <img src="ct4.jpg" alt="" />
          </div>
        </div>
        <div className="w-[300px] h-[220px] ml-[40px]">
          <img src="anhto.jpg" alt="" />
        </div>

        <div className="ml-[30px]">
          <div className="mt-5 ml-[10px]">
            <h1>Havic HV G-92 Gamepad</h1>
          </div>
          <div className="flex mt-[15px]">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <p>(150 Reviews)</p>
          </div>
          <span className="text-red-600 font-black">$192.00</span>
          <div className="mt-8">
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              <br />
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex ml-[10px] gap-5 mb-10">
          <div className="ml-[40px] ">
            <div className=" ">
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
          <div className="justify-center ">
            <div className="">
              <img className="w-[270px] h-[250px]" src="anh9.jpg" alt="" />
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
              <img className="w-[270px] h-[250px]" src="anh10.jpg" alt="" />
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
              <img className="w-[270px] h-[250px]" src="anh13.jpg" alt="" />
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
        </div>
      </div>
    </div>

    ///
  );
};

export default Homepage;
