//import style components
import {
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductQuantityItems,
  ProductSalesContainer,
  ProductSalesOptions,
  ProductSelectedContainer,
  QuantityContainer,
  QuantityInput,
} from "./product-selected.style";
//import types
import { ProductsObjKeyType, ProductsObjType } from "../products/products.component";
//import router dom
import { useParams } from "react-router-dom";
//importe react
import { useCallback, useEffect, useState } from "react";
//imports icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faCartShopping } from "@fortawesome/free-solid-svg-icons";
//imports components
import ShownProductsContainer from "../../components/shown-product-container/shown-product-container.component";
import ButtonCart from "../../components/buttonCart/buttonCart.component";

type QuantitySelectedType = {
  quantitySelected: number;
  totalPrice: number;
};

type ProductsSelectedType = ProductsObjType & QuantitySelectedType;

const ProductSelected = ({ products }: { products: ProductsObjKeyType }) => {
  //parâmetros recebidos por Url
  const { params } = useParams() as { params: string }; //evitando o undefined
  //produto da pagina
  const [product, setProduct] = useState(products[params]);
  //numero do slice
  const [indexSlice, setIndexSlice] = useState(0);
  const [barActive, setBarActive] = useState([false, true]);
  //produtos que serão exibidos
  const [shownProducts, setShownProducts] = useState(product.slice(0, 3));
  const [transition, setTransition] = useState<boolean>(true);
  //variação do produto selecionado
  const [itemSelected, setItemSelected] = useState<ProductsSelectedType>({
    ...product[0],
    quantitySelected: 1,
    totalPrice: product[0].price,
    id: 0,
  });

  //desestruturação para facilitar legibilidade
  const { name, totalPrice, quantity, quantitySelected } = itemSelected;

  //setando produtos a serem exibidos
  useEffect(() => {
    setShownProducts(product.slice(indexSlice, indexSlice + 3));
    setBarActive([indexSlice !== 0, indexSlice + 3 !== product.length]);
  }, [indexSlice, product]);

  //setando o produto a que a pagina se refere
  useEffect(() => {
    setProduct(products && products[params]);
  }, [products, params]);

  //use callback para impedir ocorrências de erros e loops infinitos
  const updateTotalPrice = useCallback((valueOne: number, valueTwo: number): number => {
    return valueOne * valueTwo;
  }, []);
  //atualização do preço total
  useEffect(() => {
    setItemSelected((previewValue) => {
      return {
        ...previewValue,
        totalPrice: updateTotalPrice(previewValue.price, previewValue.quantitySelected),
      };
    });
  }, [updateTotalPrice, itemSelected.quantitySelected, itemSelected.price]);

  //função para definir item selecionado junto da animação
  const handlerSelect = (item: ProductsObjType) => {
    //timeout para animação de criação
    setTransition(false);
    setTimeout(() => {
      setTransition(true);
    }, 0);

    setItemSelected({ ...item, quantitySelected: itemSelected.quantitySelected, totalPrice: itemSelected.totalPrice });
  };

  //função para editar o index do slice
  const editSlice = (value: number) => {
    if ((indexSlice === 0 && value < 0) || (indexSlice + 3 === product.length && value > 0)) return;
    setIndexSlice(indexSlice + value);
    setItemSelected({ ...itemSelected, id: itemSelected.id - value });
  };
  //função de edição da quantidade
  const editQuantitySelected = (value: number) => {
    if (itemSelected.quantitySelected === 1 && value < 1) return;
    setItemSelected({
      ...itemSelected,
      quantitySelected: itemSelected.quantitySelected + value,
    });
  };

  return (
    <ProductSelectedContainer>
      <ShownProductsContainer
        enable={barActive}
        editSlice={editSlice}
        handlerSelect={handlerSelect}
        shownProducts={shownProducts}
        idSelected={itemSelected.id}
        LargeLayout={product.length > 3}
      />
      <ProductSalesContainer>
        <ProductSalesOptions transition={transition}>
          <ProductName className="transition">{name}</ProductName>
          <ProductPrice className="transition">
            ${totalPrice}
            <span>Pague no boleto ou via Pix!!</span>
          </ProductPrice>
          <QuantityContainer>
            <ProductQuantityItems>
              QTD
              <span>
                <FontAwesomeIcon onClick={() => editQuantitySelected(-1)} icon={faCaretLeft} />
              </span>
              <QuantityInput type="number" value={quantitySelected} disabled />
              <span>
                <FontAwesomeIcon onClick={() => editQuantitySelected(1)} icon={faCaretRight} />
              </span>
            </ProductQuantityItems>
            <ProductQuantity>{quantity}</ProductQuantity>
          </QuantityContainer>
          <ButtonCart>
            <>
              Add cart <FontAwesomeIcon icon={faCartShopping} />
            </>
          </ButtonCart>
        </ProductSalesOptions>
      </ProductSalesContainer>
    </ProductSelectedContainer>
  );
};
export default ProductSelected;
