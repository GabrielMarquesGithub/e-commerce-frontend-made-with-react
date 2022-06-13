import styled, { keyframes } from "styled-components";
import { color } from "../../assets/color";

const animationToAppear = () => keyframes`
  0%{
    opacity: 0;
    bottom: 30px; 
  }
  50%{
    opacity: 0.8;
    bottom: -15px; 
  }
  100%{
    opacity: 1;
    bottom: 0px;
  }
`;
export const ImgProduct = styled.img`
  box-shadow: 2px 2px 10px black;
  border-radius: 20px;
  width: 100%;
`;
export const DivQuantity = styled.div`
  cursor: pointer;
  position: absolute;
  top: -410px;
  left: -280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    color: ${color.verde};
    display: block;
    border: 3px solid ${color.verdeEscuro};
    border-radius: 20px;
    padding: 30px 25px;
    background-color: ${color.dark};
    box-shadow: 2px 2px 5px black;
    transition: all 200ms ease-in-out;
  }
  span:hover {
    transition: all 200ms ease-in-out;
    background-color: ${color.branco};
    border-color: ${color.verdeClaro};
    color: ${color.verdeClaro};
    transform: scale(1.05);
  }
`;

export const TextContainer = styled.div`
  position: relative;
`;

export const ProductSelectedItemContainer = styled.div`
  width: 450px;
  position: relative;
  animation: ${animationToAppear} 500ms ease-in-out forwards;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
