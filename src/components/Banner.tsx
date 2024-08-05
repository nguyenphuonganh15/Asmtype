const Banner = () => {
  const menuList = [
    { index: 1, text: "Woman’s Fashion" },
    { index: 2, text: "Men’s Fashion" },
    { index: 3, text: "Electronics" },
    { index: 4, text: "Home & Lifestyle" },
    { index: 5, text: "Medicine" },
    { index: 6, text: "Sports & Outdoor" },
    { index: 7, text: "Baby’s & Toys" },
    { index: 8, text: "Groceries & Pets" },
    { index: 9, text: "Health & Beauty" },
  ];
  return (
    <div className="flex">
      <div className="w-[217px] h-[328px] flex border-solid border-r-2 border-gray-500 ">
        <div>
          <ul className="w-full h-full flex flex-col justify-between">
            {menuList.map((item) => (
              <li key={item.index}>
                <a href="">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[800px] h-[328px] bg-black ml-20">
        <img src="/public/anhbanner1.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
