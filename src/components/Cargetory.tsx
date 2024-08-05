import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Cartegory = () => {
  const itemList = [
    { index: 1, text: "Phones" },
    { index: 2, text: "Computers" },
    { index: 3, text: "Camera" },
    { index: 4, text: "HeadPhones" },
    { index: 5, text: "Gaming" },
  ];

  return (
    <div className=" mt-10">
      <div className="flex">
        <div className="flex font-black ml-9">
          <h1>Browse By Category</h1>
        </div>
        <div className="flex items-center justify-between ml-[880px] gap-5 ">
          <FaArrowLeft />

          <FaArrowRight />
        </div>
      </div>

      <div className="flex justify-center w-[850px] h-[145px] border-solid border-2 border-gray-500 gap-5 ml-[200px] mt-8">
        {itemList.map((item) => (
          <div
            key={item.index}
            className="flex-1 border-solid border-r-2 border-gray-500 flex justify-center items-center"
          >
            <a href="">{item.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartegory;
