import styled from "styled-components";

import MainSection from "../components/mainSection";
import NavBar from "../components/nav/NavBar";

const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  /* background-color: lightcoral; */
  min-height: 1000px;
`;
function Home() {
  return (
    <HomeWrapper>
      <NavBar />
      <MainSection />
    </HomeWrapper>
  );
}
export default Home;
