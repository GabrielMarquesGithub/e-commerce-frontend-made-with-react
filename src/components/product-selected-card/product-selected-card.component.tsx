import { useState } from "react";
import { ProductsObjType } from "../../routes/products/products.component";
import { ImgProduct, ProductSelectedItemContainer, TextContainer, DivQuantity } from "./product-selected-card.style";

const ProductSelectedItem = ({
  items,
  onSelect,
  idSelected,
}: {
  items: ProductsObjType[];
  onSelect: (items: ProductsObjType) => void;
  idSelected: number;
}) => {
  const { imgUrl } = items[0];
  const [imgSelected, setImgSelected] = useState(imgUrl);
  const handlerImg = (url: string) => {
    setImgSelected(url);
  };

  return (
    <>
      <ProductSelectedItemContainer>
        <ImgProduct src={imgSelected} />
        <TextContainer>
          <DivQuantity>
            {items &&
              items.map((item, index) => (
                <span
                  onClick={() => {
                    handlerImg(item.imgUrl);
                    onSelect({ ...item, id: index });
                  }}
                >
                  {item.quantity}
                </span>
              ))}
          </DivQuantity>
        </TextContainer>
      </ProductSelectedItemContainer>
    </>
  );
};
export default ProductSelectedItem;
