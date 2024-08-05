import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import { Product } from "./common/Product";
import Login from "./component/Login";
import ProductEdit from "./component/ProductEdit";
import ProductList from "./component/ProductList";
import ProductsAdd from "./component/ProductsAdd";
import Register from "./component/Register";
import Layout from "./client/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signin from "./Pages/Signin";
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import { instance } from "./api";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  }, []);
  const onHandleRemo = async (id: number) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa");
    if (confirm) {
      try {
        await instance.delete(`/products/${id}`);
        alert("xóa thành công");
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        alert("Xoá sản phẩm thành công");
      }
    }
  };
  const onHandleAdd = async (product: Product) => {
    try {
      const { data } = await instance.post("/products", product);
      alert("Thêm thành công");
      navigate("/");
      setProducts([...products, data]);
    } catch (error) {
      console.log("🚀 ~ onHandleAdd ~ error:", error);
    }
  };
  const onhandEdit = async (product: Product) => {
    try {
      const { data } = await instance.put(`/products/${product.id}`, product);
      setProducts(
        products.map((item) => (item.id === product.id ? product : item))
      );
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ onhandEdit ~ error:", error);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/products" element={<Layout />}>
          <Route index element={<Home products={products} />} />
          <Route
            path="/products/about"
            element={<About products={products} />}
          />
          <Route path="/products/notfound" element={<NotFound />} />
          <Route path="/products/register" element={<Register />} />
          <Route path="/products/Signin" element={<Signin />} />
          <Route path="/products/HomePage" element={<Homepage />} />
        </Route>
        <Route
          path="/"
          element={<ProductList onRemo={onHandleRemo} products={products} />}
        />
        <Route path="/edit/:id" element={<ProductEdit onEdit={onhandEdit} />} />
        <Route path="/add" element={<ProductsAdd onAdd={onHandleAdd} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
