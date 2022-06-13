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
  width: 100%;
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
  font-size: 3rem;
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
interface Props {
  scale: number;
}
export const LongProductSelectedItemContainer = styled.div<Props>`
  box-shadow: 1px 1px 10px black;
  position: relative;
  animation: ${animationToAppear} 500ms ease-in-out forwards;
  transform: scale(${(props) => props.scale});
  background-color: ${color.dark};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 300ms ease-in-out;
  &:hover {
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
  }
`;
