import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const ContentWrapper = styled.div`
  position: relative;
  min-height: 500px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
};

export default Layout;
