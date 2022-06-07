//import style components
import { ProductsIndexContainer } from "./products-index.style";
//import types
import { ProductsType } from "../products/products.component";
import ProductCard from "../../components/product-card/product-card.component";

const ProductsIndex = ({ products }: { products: ProductsType[] | null }) => {
  return (
    <ProductsIndexContainer>
      {products && products.map((product) => <ProductCard key={product.title} product={product} />)}
    </ProductsIndexContainer>
  );
};
export default ProductsIndex;
