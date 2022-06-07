import { Outlet } from "react-router-dom";
import {
  ButtonLogin,
  LinksContainer,
  LinkSpan,
  LinkStyle,
  LogoContainer,
  LogoStyle,
  NavContainer,
} from "./navigation.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <LogoStyle />
        </LogoContainer>
        <LinksContainer>
          <LinkStyle to="/produtos">
            <LinkSpan className="link">Produtos</LinkSpan>
          </LinkStyle>
          <LinkStyle to="/sobre">
            <LinkSpan>News</LinkSpan>
          </LinkStyle>
          <LinkStyle to="/noticias">
            <LinkSpan>Sobre</LinkSpan>
          </LinkStyle>
          <LinkStyle to="/login">
            <ButtonLogin>
              <span className="icon-container">
                <span className="icon">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </span>
              <span className="text">Entrar</span>
            </ButtonLogin>
          </LinkStyle>
          <LinkStyle to="/carrinho">
            <LinkSpan>
              <FontAwesomeIcon icon={faBasketShopping} size="2x" />
            </LinkSpan>
          </LinkStyle>
        </LinksContainer>
      </NavContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
