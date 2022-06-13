import styled, { keyframes } from "styled-components";
import { color } from "../../assets/color";

export const ProductSelectedContainer = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  width: 90vw;
`;
export const ProductSalesContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const apearAnimation = keyframes`
  0%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`;
interface PropsSales {
  transition: boolean;
}
export const ProductSalesOptions = styled.div<PropsSales>`
  box-shadow: 2px 2px 10px black;
  padding: 20px 0px;
  color: ${color.verde};
  width: 90%;
  height: 400px;
  background-color: ${color.dark};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .transition {
    animation: ${(props) => (props.transition ? apearAnimation : "nada")} 500ms ease-in-out;
  }
`;

export const ProductName = styled.h2`
  text-align: center;
  height: 200px;
  font-size: 3rem;
`;
export const ProductPrice = styled.h2`
  text-align: right;
  font-size: 5rem;
  span {
    font-size: 2rem;
    display: block;
  }
`;
export const ProductQuantity = styled.h2`
  font-size: 3rem;
`;
export const QuantityInput = styled.input`
  font-size: 1.5rem;
  padding: 5px;
  border: none;
  border-radius: 10px;
  background: white;
  width: 60px;
`;
export const ProductQuantityItems = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  span {
    margin: 5px;
  }
  span:hover {
    transform: scale(1.2);
  }
`;
export const QuantityContainer = styled.div`
  margin-top: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
