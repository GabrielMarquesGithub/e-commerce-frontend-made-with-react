import { ProductsObjType } from "../../routes/products/products.component";
import {
  ImgProduct,
  LongProductSelectedItemContainer,
  DivPrice,
  TextContainer,
  DivName,
} from "./long-product-selected-card.style";

const LongProductSelectedItem = ({
  item,
  onSelect,
  id,
  idSelected,
}: {
  item: ProductsObjType;
  onSelect: (item: ProductsObjType) => void;
  id: number;
  idSelected: number;
}) => {
  const scale = id === idSelected ? 1.1 : 1;

  const { imgUrl, name, price } = item;
  return (
    <>
      <LongProductSelectedItemContainer
        onClick={() => {
          onSelect({ ...item, id: id });
        }}
        scale={scale}
      >
        <ImgProduct src={imgUrl} />
        <TextContainer>
          <DivName>{name}</DivName>
          <DivPrice>
            <span>R${price}</span>
          </DivPrice>
        </TextContainer>
      </LongProductSelectedItemContainer>
    </>
  );
};
export default LongProductSelectedItem;
