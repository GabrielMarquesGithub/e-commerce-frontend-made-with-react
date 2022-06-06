//import style
import { HomeContainer, HomeItemMain } from "./home.style";

//import imgs
import graos from "../../assets/imgs/graos.jpg";
import jornais from "../../assets/imgs/jornais-edit.png";
import sobre from "../../assets/imgs/foto-sobre-edit.png";

//import components
import HomeItemAside from "../../components/home-item-aside/home-item-aside.component";

const Home = () => {
  return (
    <HomeContainer>
      <HomeItemMain>
        <img src={graos} alt="Produtos" />
        <h2>Produtos</h2>
        <h3>Abrir pagina da loja</h3>
        <p>A CopaBase oferece os melhores produtos junto aos cooperados</p>
        <span className="box-text"></span>
        <span className="screen"></span>
      </HomeItemMain>
      <HomeItemAside title="News" text="Acompanhe as novidades" imgSRC={jornais} />
      <HomeItemAside title="Sobre" text="Conheça nossa causa e nossas atividades" imgSRC={sobre} />
    </HomeContainer>
  );
};
export default Home;
