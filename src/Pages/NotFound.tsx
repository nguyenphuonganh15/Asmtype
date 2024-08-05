const NotFound = () => {
  return (
    <div className="ml-[250px] mt-[100px] mb-[100px]">
      <div className=" justify-center items-center ">
        <h1 className="font-black text-8xl">404 Not Found</h1>
      </div>
      <div className="mt-[50px] ml-[120px] ">
        <p>Your visited page not found. You may go home page.</p>
      </div>

      <button className="w-[200px] h-[70px]border-solid border-2 border-red-600 bg-red-700 mt-[80px]  ml-[200px] text-yellow-50">
        Back to home page
      </button>
    </div>
  );
};

export default NotFound;
