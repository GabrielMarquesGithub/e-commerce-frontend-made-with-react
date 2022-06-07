import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsIndex from "../products-index/products-index.component";
//firebase limit
//import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import PRODUTOS_DATA from "../../produtos-data";

export type ProductsType = {
  title: string;
  items: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: string;
    imgUrl?: string;
  }[];
};

const Products = () => {
  const [productsMap, setProductsMap] = useState<ProductsType[] | null>(null);

  useEffect(() => {
    const asyncProducts = async () => {
      const imgUrlJson = await fetch("https://jsonplaceholder.typicode.com/photos");
      const imgUrl = await imgUrlJson.json();
      const newProducts: ProductsType[] = PRODUTOS_DATA;
      const CompleteProducts = newProducts.map((newProduct) => {
        return {
          ...newProduct,
          items: newProduct.items.map((item, index) => {
            return { ...item, imgUrl: imgUrl[index].url };
          }),
        };
      });
      setProductsMap(CompleteProducts);
    };
    asyncProducts();
  }, []);

  return (
    <Routes>
      <Route index element={<ProductsIndex products={productsMap} />} />
      <Route />
    </Routes>
  );
};
export default Products;
