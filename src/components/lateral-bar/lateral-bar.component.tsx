import { LateralBarContainer, LateralBarItem } from "./lateral-bar.style";

const LateralBar = ({
  heights = [100],
  value,
  execute,
  enable,
}: {
  heights?: number[];
  value: number;
  execute: (x: number) => void;
  enable: boolean;
}) => {
  const active = enable ? "black" : "grey";
  return (
    <LateralBarContainer transition={enable} onClick={() => execute(value)}>
      {heights.map((height) => (
        <LateralBarItem key={height} height={enable ? height : 300 - height} active={active}></LateralBarItem>
      ))}
    </LateralBarContainer>
  );
};
export default LateralBar;
