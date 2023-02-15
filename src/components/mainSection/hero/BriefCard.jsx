import styled from "styled-components";
import Imba from "../../shared/Imba";

const BriefWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 60px;
  width: 25%;
  font-family: inter;
  color: white;
`;
const TitleBox = styled.h5`
  font-size: 48px;
`;
const ContentBox = styled.p`
  font-size: 18px;
  color: #cdcdcd;
`;
const RatingBox = styled.p`
  & :first-child {
    color: red;
    margin-right: 5px;
  }
`;
function BriefCard() {
  return (
    <BriefWrapper>
      <TitleBox>Peaky Blinders</TitleBox>
      <ContentBox>
        Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in
        Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and
        put an end to the criminal activities.
      </ContentBox>
      <Imba />
      <RatingBox>
        <span>2B+</span>
        <span>Streams</span>
      </RatingBox>
    </BriefWrapper>
  );
}
export default BriefCard;
