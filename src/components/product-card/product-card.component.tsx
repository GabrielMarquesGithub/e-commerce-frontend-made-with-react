import { ImgProduct, ProductCardContainer, DivPrice, TextContainer, DivQuantity, DivName } from "./product-card.style";
import { useNavigate } from "react-router-dom";
import { ProductsObjType } from "../../routes/products/products.component";

const ProductCard = ({ product, title }: { product: ProductsObjType[]; title: string }) => {
  const { imgUrl, quantity, price } = product[0];

  //navigate deve ser instanciado
  const navigate = useNavigate();
  //o navigate instanciado recebe o path
  const onNavigateHandler = (route: string) => navigate(route);

  return (
    <>
      {imgUrl && (
        <ProductCardContainer onClick={() => onNavigateHandler(title)}>
          <ImgProduct src={imgUrl} />
          <TextContainer>
            <DivQuantity>
              {product.length < 10 ? product.map((item) => <span>{item.quantity}</span>) : <span>{quantity}</span>}
            </DivQuantity>
            <DivName>{title}</DivName>
            <DivPrice>
              <span>R${price}</span>
            </DivPrice>
          </TextContainer>
        </ProductCardContainer>
      )}
    </>
  );
};
export default ProductCard;
