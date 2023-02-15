import styled from "styled-components";
const weeklyData = [
  {
    imgUrl: "/img/movie1.png",
    imgAlt: "movie img",
    figCaption: "The Rings of Power",
  },
  {
    imgUrl: "/img/movie2.png",
    imgAlt: "movie img",
    figCaption: "The Rings of Power",
  },
  {
    imgUrl: "/img/movie3.png",
    imgAlt: "movie img",
    figCaption: "The Rings of Power",
  },
  {
    imgUrl: "/img/movie4.png",
    imgAlt: "movie img",
    figCaption: "The Rings of Power",
  },
  {
    imgUrl: "/img/movie5.png",
    imgAlt: "movie img",
    figCaption: "The Rings of Power",
  },
  {
    imgUrl: "/img/movie6.png",
    imgAlt: "movie img",
    figCaption: "The Rings of Power",
  },
];
const Wrapper = styled.div`
  display: flex;
  &::after {
    content: "";
    display: block;
    height: 325px;
    background: pink;
    background: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7) 75%,
      rgba(0, 0, 0, 0)
    );
    top: -220px;
    left: 0;
    width: 100%;
    position: absolute;
  }
`;
const DataWrapper = styled.div`
  margin: 10px 15px;
  &:first-child {
    margin-left: 0px;
  }
`;
function WeeklyNewCard() {
  return (
    <Wrapper>
      {weeklyData.map((item) => (
        <DataWrapper>
          <img src={item.imgUrl} alt={item.imgAlt} />
          <figcaption>{item.figCaption}</figcaption>
        </DataWrapper>
      ))}
    </Wrapper>
  );
}
export default WeeklyNewCard;
