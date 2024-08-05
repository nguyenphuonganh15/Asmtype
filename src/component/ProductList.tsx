import { Product } from "@/common/Product";
import { Link } from "react-router-dom";

type Props = {
  onRemo: (id: number) => void;
  products: Product[];
};

const ProductList = (props: Props) => {
  const { products, onRemo } = props;
  return (
    <div>
      <Link to={"/add"}>
        <button className="bg-blue-500 mt-[50px] mb-[5px] ml-[25px]">
          Thêm sản phẩm
        </button>
      </Link>
      <div className="relative w-full flex flex-col justify-center overflow-x-auto border-2 border-solid border-gray-400 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400">
          {/* Render các sản phẩm trên trang hiện tại */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="w-[100px] px-6 py-3">
                Tên Sản Phẩm
              </th>
              <th scope="col" className="w-[100px] px-6 py-3">
                Ảnh
              </th>

              <th scope="col" className="px-6 py-3">
                Mô Tả Sản Phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Giá Sản Phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="w-[50%] px-6  py-4 font-medium text-gray-900   dark:text-white"
                >
                  <p className=" ">{product.title}</p>
                </th>
                <td className="px-6 py-4">
                  <img src={product.image} alt="" />{" "}
                </td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-8 flex h-full  items-center justify-center gap-4 ">
                  <Link
                    to={`/edit/${product.id}`}
                    className="font-medium text-blue-600 text-xl  dark:text-blue-500 hover:underline"
                  >
                    <button>Sửa</button>
                  </Link>
                  <div className="font-medium text-blue-600 text-2xl  dark:text-blue-500 hover:underline">
                    <button onClick={() => onRemo(Number(product.id))}>
                      Xoá
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
