import styled from "styled-components";
import WeeklyNewCard from "./WeeklyNewCard";

const WeeklyWrapper = styled.div`
  padding-left: 60px;
  background: #1d1d1d;
  position: relative;
  
`;
const Tile = styled.h5`
  color: white;
  font-size: 18px;
  margin: 20px 0;
  margin-bottom: 10px;

`;
function WeeklyNew() {
  return (
    <WeeklyWrapper>
      <Tile> New This Week</Tile>
      <WeeklyNewCard />
    </WeeklyWrapper>
  );
}
export default WeeklyNew;
