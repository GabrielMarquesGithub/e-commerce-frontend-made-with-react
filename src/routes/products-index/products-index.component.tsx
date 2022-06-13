//import style components
import { ProductsIndexContainer, LoadingContainer, Loading } from "./products-index.style";
//import types
import { ProductsObjKeyType } from "../products/products.component";
import ProductCard from "../../components/product-card/product-card.component";

const ProductsIndex = ({ products }: { products: ProductsObjKeyType }) => {
  const condition = products[Object.keys(products)[0]];
  return (
    <>
      <ProductsIndexContainer>
        {condition[0].imgUrl &&
          Object.keys(products).map((title) => <ProductCard key={title} product={products[title]} title={title} />)}
      </ProductsIndexContainer>
      {!condition[0].imgUrl && (
        <LoadingContainer>
          <Loading>Loading</Loading>
        </LoadingContainer>
      )}
    </>
  );
};
export default ProductsIndex;
