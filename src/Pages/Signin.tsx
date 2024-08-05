import { instance } from "@/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const { data } = await instance.post(
        "http://localhost:3000/auth/signin",
        formData
      );
      console.log("🚀 ~ onSubmit ~ formData:", formData);
      alert("Đăng nhâp thành công");
      console.log(data);
      navigate("/products");
    } catch (error) {
      alert("sai tai khoan mat khau");
    }
  };

  return (
    <div className="flex justify-center mb-[50px]">
      <div>
        <img
          src="/public/anhsignin.jpg"
          alt=""
          className="w-[705px] h-[510px]"
        />
      </div>
      <div className=" ml-[200px] mt-[120px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="item cể">
            <h1 className="font-black text-2xl mb-[25px]">
              Log in to Exclusive
            </h1>
          </div>
          <div className="mt-7">
            <p>Enter your details below</p>
          </div>
          <div className="mt-[20px]">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-[400px] h-[40px] border-solid border-b-2 border-gray-500"
              {...register("email")}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-[400px] h-[40px] border-solid border-b-2 border-gray-500"
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="w-[100px] h-[50px] border-solid border-2 border-red-600 bg-red-700 rounded-md mt-[50px] mb-[50px] text-yellow-50"
          >
            Login
          </button>
          <input
            className="ml-[190px]"
            type="button"
            value="Forget Password?"
          />
        </form>
      </div>
    </div>
  );
};

export default Signin;
