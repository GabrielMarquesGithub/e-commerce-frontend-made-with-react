import styled from "styled-components";
import { color } from "../../assets/color";

export const ImgProduct = styled.img`
  width: 100%;
`;
export const DivQuantity = styled.div`
  position: absolute;
  top: -260px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    transition: opacity 300ms ease-in-out;
    opacity: 0;
    display: block;
    border: 3px solid ${color.verdeEscuro};
    border-radius: 20px;
    padding: 15px 5px;
    background-color: ${color.dark};
  }
  span:hover {
    color: ${color.verdeClaro};
    transform: scale(1.1);
  }
`;
export const DivName = styled.div`
  bottom: 0;
  position: relative;
  z-index: 5;
  font-size: 2rem;
  transition: bottom 300ms ease-in-out;
`;
export const DivPrice = styled.div`
  background-color: ${color.dark};
  right: -50px;
  top: -50px;
  border-radius: 50%;
  padding: 100px;
  position: absolute;
  font-weight: bold;
  font-size: 4rem;
  span {
    top: 30px;
    left: 40px;
    position: absolute;
    transition: top 300ms ease-in-out;
  }
`;
export const TextContainer = styled.div`
  top: 0px;
  background-color: ${color.dark};
  padding: 20px;
  height: 100%;
  position: relative;
  transition: top 300ms ease-in-out;
  color: ${color.verde};
`;
export const ProductCardContainer = styled.div`
  background-color: ${color.dark};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: transform 300ms ease-in-out;
    ${TextContainer} {
      transition: top 300ms ease-in-out;
      color: ${color.verdeClaro};
      top: -20px;
    }
    ${DivPrice} {
      span {
        transition: top 300ms ease-in-out;
        top: 40px;
      }
    }
    ${DivName} {
      transition: bottom 300ms ease-in-out;
      bottom: -10px;
    }
    ${DivQuantity} {
      span {
        transition: opacity 500ms ease-in-out;
        opacity: 1;
      }
    }
  }
`;
