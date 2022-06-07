import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as TitleNav } from "../../assets/svgs/title.svg";

//colors
import { color } from "../../assets/color";

// Styles para a logo
export const LogoContainer = styled(Link)`
  position: relative;
  border-radius: 30px;
  padding: 5px;
  border: 5px solid ${color.verdeEscuro};
  transition: border 200ms ease-in-out;
  &::after {
    background-color: ${color.dark};
    position: absolute;
    content: "";
    z-index: 0;
    left: -5px;
    top: -5px;
    width: 220px;
    height: 74px;
    transition: width 300ms ease-in-out;
  }
  &:hover {
    transition: border 100ms ease-in-out 400ms;
    border: 5px solid ${color.verdeClaro};
    ::after {
      transition: width 500ms ease-in-out;
      width: 0px;
    }
  }
`;
export const LogoStyle = styled(TitleNav)`
  position: relative;
  z-index: 1;
  height: 50px;
  width: 200px;
`;
// Estrutura para Nav
export const NavContainer = styled.div`
  display: block;
  height: 16vh;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.dark};
`;
// Estrutura links
export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinkSpan = styled.span``;
export const LinkStyle = styled(Link)`
  font-weight: bold;
  margin: 20px;
  color: ${color.verde};
  ${LinkSpan}:hover {
    display: block;
    color: ${color.verdeClaro};
    transform: scale(1.1);
  }
`;
const arrowAnimation = keyframes`
  0%{
    left: 35px;
  }
  50%{
    left: 25px;
  }
  100%{
    left: 35px;
  }
`;
// botão animado de login
export const ButtonLogin = styled.button`
  font-size: 2rem;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  background: transparent;
  width: 15rem;
  height: 4rem;
  display: flex;
  color: ${color.verde};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  .icon-container {
    position: absolute;
    left: 0px;
    background-color: ${color.verde};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms ease-in-out;
    .icon {
      position: absolute;
      left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${color.branco};
      transition: all 300ms ease-in-out;
    }
  }
  .text {
    transition: all 200ms ease-in-out;
    position: absolute;
    left: 50px;
    z-index: 5;
  }

  &:hover {
    .icon-container {
      background-color: ${color.verdeClaro};
      transition: all 500ms ease-in-out;
      border-radius: 0;
      width: 100%;
      .icon {
        transition: all 500ms ease-in-out;
        left: 35px;
        animation: ${arrowAnimation} 500ms infinite ease-in-out 500ms;
      }
    }
    .text {
      transition: all 300ms ease-in-out;
      color: ${color.branco};
      left: 65px;
    }
  }
`;
// animação seta botão login
