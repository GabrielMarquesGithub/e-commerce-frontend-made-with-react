import styled from "styled-components";
import { color } from "../../assets/color";

export const ButtonContainer = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonItem = styled.button`
  cursor: pointer;
  color: ${color.verde};
  font-size: 2rem;
  outline: none;
  width: 200px;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 40px;
  background-color: ${color.preto};
  border: ${color.verdeEscuro} 2px solid;
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: ${color.branco};
    border: ${color.verdeClaro} 2px solid;
    color: ${color.verdeClaro};
    transition: all 300ms ease-in-out;
  }
`;
