import { Product } from "@/common/Product";
import Banner from "@/components/Banner";
// import Cartegory from "@/components/Cargetory";
// import OurProduct from "@/components/OurProduct";
// import Thismonth from "@/components/Thismonth";
import { GoStarFill } from "react-icons/go";

type Props = {
  products: Product[];
};

const Home = ({ products }: Props) => {
  const index = [];
  for (let i = 0; i < products.length; i += 4) {
    index.push(products.slice(i, i + 4));
  }

  return (
    <div>
      <Banner />
      {/* <Cartegory />
      <Thismonth />
      <OurProduct /> */}
      <div className="col-span-12 col-start-1 grid grid-cols-2 md:grid-cols-4 gap-8 pb-7 border-b-[1px] border-[#ccccc]">
        {products.map((item, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mt-11">
            <>{console.log(item)}</>
            <div
              key={item.id as string}
              className="product-container flex flex-col items-center border p-4 m-4"
              style={{
                width: "200px",
              }}
            >
              <img
                width={50}
                src={item.thumbnail}
                alt={item.title}
                className="w-48 h-auto"
              />

              <p className="mt-5">{item.title}</p>
              <div className="mt-2">
                <span className="text-red-600">{item.price}</span>
                <span className="line-through ml-3">$360</span>
              </div>
              <div className="mt-2">{item.description}</div>
              <div className="flex mt-3 mb-8">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
