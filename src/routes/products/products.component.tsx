import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsIndex from "../products-index/products-index.component";
//firebase limit
//import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import PRODUTOS_DATA from "../../produtos-data";
import ProductSelected from "../product-selected/product-selected.component";

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
export type ProductsObjType = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: string;
  imgUrl: string;
};

export type ProductsObjKeyType = {
  [x: string]: ProductsObjType[];
};

const convertArrayInObj = (arrayOfObj: ProductsType[]): ProductsObjKeyType => {
  //linha para converter um array de objetos em um objeto
  return arrayOfObj.reduce((obj, item) => ({ ...obj, [item.title]: item.items }), {});
};

const Products = () => {
  const [productsMap, setProductsMap] = useState<ProductsObjKeyType>(convertArrayInObj(PRODUTOS_DATA));

  //MÉTODO PARA RENDERIZAR PRODUTOS LOCALMENTE SEM ACESSO AO BD
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
      setProductsMap(convertArrayInObj(CompleteProducts));
    };
    asyncProducts();
  }, []);

  return (
    <Routes>
      <Route index element={<ProductsIndex products={productsMap} />} />
      <Route path=":params" element={<ProductSelected products={productsMap} />} />
    </Routes>
  );
};
export default Products;
