import { Product } from "@/common/Product";

// import Cartegory from "@/components/Cargetory";
// import OurProduct from "@/components/OurProduct";
// import Thismonth from "@/components/Thismonth";
import { GoStarFill } from "react-icons/go";

type Props = {
  products: Product[];
};

const About = ({ products }: Props) => {
  const index = [];
  for (let i = 0; i < products.length; i += 4) {
    index.push(products.slice(i, i + 4));
  }

  return (
    <div>
      {/* <Banner />
      {/* <Cartegory />
      <Thismonth />
      <OurProduct /> */}

      {index.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mt-11">
          {row.map((item) => (
            <div
              key={item.id}
              className="product-container flex flex-col items-center border p-4 m-4"
              style={{
                width: "200px",
              }}
            >
              <img
                width={50}
                src={item.thumbnail}
                alt=""
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
          ))}
        </div>
      ))}
    </div>
  );
};

export default About;
