import { instance } from "@/api";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (formData: unknown) => {
    try {
      const { data } = await instance.post(
        "http://localhost:3000/auth/register",
        formData
      );
      console.log("🚀 ~ onSubmit ~ formData:", formData);
      alert("Đăng ký thành công");
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };
  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              {...register("password")}
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-2 flex flex-row justify-center">
          <span className="absolute bg-white px-4">or</span>
          <div className="w-full bg-gray-200 mt-3" style={{ height: 3 }} />
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          >
            Đăng Ký
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Bạn đã có tài khoản?
        <Link
          to={"/login"}
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Đăng Nhập
        </Link>
      </p>
    </div>
  );
};

export default Register;
