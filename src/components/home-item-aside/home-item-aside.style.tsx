import styled, { keyframes } from "styled-components";
import { color } from "../../assets/color";

const animationToApear = keyframes`
  0%{
    opacity: 0.9;
    left: 50px;
  }
  100%{
    opacity: 1;
    left: 0px;
  }
`;
export const TextContainerLeft = styled.div`
  left: -150px;
  transition: left 500ms ease-in-out;
  h2 {
    position: absolute;
    left: 180px;
    font-size: 3.4rem;
  }
`;
export const TextContainerRight = styled.div`
  right: -300px;
  transition: right 800ms ease-in-out;
  h3 {
    left: 25px;
    width: 150px;
    position: absolute;
    font-size: 2rem;
  }
`;
export const HomeItemAsideContainer = styled.div`
  animation: ${animationToApear} 500ms ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 210px;
  overflow: hidden;
  position: relative;
  background-color: ${color.preto};
  img {
    position: absolute;
    right: 0px;
    top: 0px;
    opacity: 0.5;
    transition: opacity 100ms, right 500ms ease-in-out;
  }
  ${TextContainerLeft},${TextContainerRight} {
    color: ${color.verde};
    text-shadow: 2px 2px 10px ${color.preto};
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    background-color: ${color.dark};
    z-index: 5;
  }
  &:hover {
    img {
      transition: opacity 100ms, right 300ms ease-in-out 100ms;
      opacity: 0.9;
      right: 100px;
    }
    ${TextContainerLeft} {
      transition: left 500ms ease-in-out;
      left: -300px;
    }
    ${TextContainerRight} {
      transition: right 500ms ease-in-out;
      right: -100px;
    }
  }
`;
