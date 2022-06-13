//import components
import LateralBar from "../lateral-bar/lateral-bar.component";
//import css
import { ProductAbsoluteContainer, ProductSelectedItemContainer } from "./shown-product-container..style";
//import types
import { ProductsObjType } from "../../routes/products/products.component";
import LongProductSelectedItem from "../long-product-selected-card/long-product-selected-card.component";
import ProductSelectedItem from "../product-selected-card/product-selected-card.component";
const ShownProductsContainer = ({
  enable,
  idSelected,
  shownProducts,
  handlerSelect,
  editSlice,
  LargeLayout,
}: {
  enable: boolean[];
  idSelected: number;
  shownProducts: ProductsObjType[];
  handlerSelect: (item: ProductsObjType) => void;
  editSlice: (x: number) => void;
  LargeLayout: boolean;
}) => {
  return (
    <ProductSelectedItemContainer>
      {LargeLayout && (
        <>
          <LateralBar enable={enable[0]} heights={[100, 150, 200]} execute={editSlice} value={-1} />
          <ProductAbsoluteContainer>
            {shownProducts &&
              shownProducts.map((item, index) => (
                <LongProductSelectedItem
                  key={item.id}
                  item={item}
                  onSelect={handlerSelect}
                  id={index}
                  idSelected={idSelected}
                />
              ))}
          </ProductAbsoluteContainer>
          <LateralBar enable={enable[1]} heights={[200, 150, 100]} execute={editSlice} value={+1} />
        </>
      )}
      {!LargeLayout && (
        <div>
          <ProductSelectedItem idSelected={idSelected} items={shownProducts} onSelect={handlerSelect} />
        </div>
      )}
    </ProductSelectedItemContainer>
  );
};
export default ShownProductsContainer;
