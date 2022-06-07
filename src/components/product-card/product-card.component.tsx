import { ImgProduct, ProductCardContainer, DivPrice, TextContainer, DivQuantity, DivName } from "./product-card.style";
import { ProductsType } from "../../routes/products/products.component";

const ProductCard = ({ product }: { product: ProductsType }) => {
  const { title } = product;
  const { price, imgUrl } = product.items[0];
  return (
    <ProductCardContainer>
      <ImgProduct src={imgUrl} />
      <TextContainer>
        <DivQuantity>
          {product.items.length < 10 ? (
            product.items.map((item) => <span>{item.quantity}</span>)
          ) : (
            <span>{product.items[0].quantity}</span>
          )}
        </DivQuantity>
        <DivName>{title}</DivName>
        <DivPrice>
          <span>${price}</span>
        </DivPrice>
      </TextContainer>
    </ProductCardContainer>
  );
};
export default ProductCard;
