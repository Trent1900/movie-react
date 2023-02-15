import Categories from "./Categories";
import Hero from "./hero";
import WeeklyNew from "./weeklyNew";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
function MainSection() {
  return (
    <MainWrapper>
      <Hero />
      <WeeklyNew />
      <Categories />
    </MainWrapper>
  );
}
export default MainSection;
