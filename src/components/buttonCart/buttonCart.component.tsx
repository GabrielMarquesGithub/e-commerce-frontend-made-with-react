import { ReactElement } from "react";
import { ButtonContainer, ButtonItem } from "./buttonCart.style";

const ButtonCart = ({ children }: { children: ReactElement }) => {
  return (
    <ButtonContainer>
      <ButtonItem>{children}</ButtonItem>
    </ButtonContainer>
  );
};
export default ButtonCart;
