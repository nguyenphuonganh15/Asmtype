import { Product } from "@/common/Product";
import schemaProduct from "@/validation/schemaProduct";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

type Props = {
  onAdd: (product: Product) => void;
};
const ProductsAdd = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: joiResolver(schemaProduct),
  });
  const onSubmit = (data: Product) => {
    props.onAdd(data);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 200,
            })}
            className="bg-gray-50 border  border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ảnh
          </label>
          <input
            type="text"
            id="image"
            {...register("images", {
              required: true,
              minLength: 3,
              maxLength: 200,
            })}
            className="bg-gray-50 border  border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.images && (
            <span className="text-red-500">{errors.images.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Giá sản phẩm
          </label>
          <input
            type="text"
            id="price"
            {...register("price", { required: true, min: 0 })}
            className="bg-gray-50 border  border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mô tả sản phẩm
          </label>

          <textarea
            id="description"
            {...register("description", { required: true })}
            className="bg-gray-50 border  border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default ProductsAdd;
