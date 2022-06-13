import styled from "styled-components";

interface Props {
  height: number;
  active: string;
}
interface PropsContainer {
  transition: boolean;
}
export const LateralBarItem = styled.span<Props>`
  display: block;
  background-color: ${(props) => props.active};
  content: "";
  border-radius: 20px;
  width: 5px;
  opacity: 0.5;
  height: ${(props) => props.height}px;
  transition: opacity 200ms ease-in-out, transform 200ms ease-in-out, height 500ms ease-in-out;
`;
export const LateralBarContainer = styled.div<PropsContainer>`
  margin: 5px;
  cursor: pointer;
  height: 100%;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.transition ? "&:hover" : "&:none")} {
    ${LateralBarItem} {
      transition: all 200ms ease-in-out;
      opacity: 0.8;
      transform: scale(0.9);
    }
  }
`;
