import styled, { keyframes } from "styled-components";
import { color } from "../../assets/color";

const animationToApear = keyframes`
  0%{
    opacity: 0.9;
    right: 50px;
  }
  100%{
    opacity: 1;
    right: 0px;
  }
`;

export const HomeContainer = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px;
  gap: 20px;
`;
export const HomeItemMain = styled.div`
  animation: ${animationToApear} 500ms ease-in-out;
  cursor: pointer;
  position: relative;
  grid-row: 1/3;
  display: flex;
  overflow: hidden;
  img {
    width: 100%;
  }

  h2 {
    text-shadow: 4px 4px 10px black;
    font-size: 5rem;
    right: 25px;
    bottom: 150px;
    position: absolute;
    color: ${color.verde};
    z-index: 6;
    transition: all 300ms ease-in-out;
  }
  h3 {
    text-shadow: 4px 4px 10px black;
    font-size: 2.2rem;
    right: -20px;
    bottom: 60px;
    width: 250px;
    opacity: 0;
    position: absolute;
    color: ${color.verde};
    z-index: 6;
    transition: all 300ms ease-in-out;
  }
  p {
    text-shadow: 4px 4px 10px black;
    font-size: 2.2rem;
    right: 25px;
    bottom: 60px;
    width: 250px;
    opacity: 1;
    position: absolute;
    color: ${color.verde};
    z-index: 6;
    transition: all 300ms ease-in-out 200ms;
  }
  .box-text {
    border-radius: 50%;
    transform: rotate(45deg);
    right: -250px;
    bottom: -300px;
    width: 600px;
    height: 600px;
    background-color: ${color.dark};
    position: absolute;
    z-index: 5;
    transition: all 300ms ease-in-out;
  }

  .screen {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: ${color.dark};
    position: absolute;
    z-index: 4;
    transition: all 300ms ease-in-out;
  }
  &:hover {
    h2 {
      transition: all 500ms ease-in-out;
      bottom: 90px;
    }
    h3 {
      transition: all 500ms ease-in-out 200ms;
      opacity: 1;
    }
    p {
      transition: all 300ms ease-in-out;
      opacity: 0;
    }
    .box-text {
      transition: all 500ms ease-in-out;
      right: -300px;
      bottom: -400px;
    }
    .screen {
      transition: all 100ms;
      opacity: 0.2;
    }
  }
`;
