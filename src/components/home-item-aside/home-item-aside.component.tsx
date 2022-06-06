import { HomeItemAsideContainer, TextContainerLeft, TextContainerRight } from "./home-item-aside.style";

interface IHomeItemAside {
  title: string;
  text: string;
  imgSRC: string;
}

const HomeItemAside = ({ title, text, imgSRC }: IHomeItemAside) => {
  console.log(imgSRC);
  return (
    <HomeItemAsideContainer>
      <TextContainerLeft>
        <h2>{title}</h2>
      </TextContainerLeft>
      <TextContainerRight>
        <h3>{text}</h3>
      </TextContainerRight>
      <img src={imgSRC} alt={title} />
    </HomeItemAsideContainer>
  );
};
export default HomeItemAside;
