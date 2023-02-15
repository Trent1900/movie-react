import styled from "styled-components";
import BriefCard from "./BriefCard";
import MaskY from "./MaskY";

const HeroWrapper = styled.div`
  height: 730px;
  background-color: #666;
  background-image: url("/img/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
function Hero() {
  return (
    <HeroWrapper>
      <MaskY />
      <BriefCard />
    </HeroWrapper>
  );
}
export default Hero;
