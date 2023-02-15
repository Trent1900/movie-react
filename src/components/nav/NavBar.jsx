import NavHeader from "./NavHeader";
import styled from "styled-components";
import NavItems from "./NavItems";
import NavFooter from "./NavFooter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { navVisible } from "../../redux/slice/nav/navSlice";

const NavWrapper = styled.div`
  width: 212px;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavItemWrapper = styled.div`
  margin-top: 145px;
  margin-left: 16px;
  flex-grow: 1;
`;
const NavFooterWrapper = styled.div`
  margin-left: 16px;
`;

const navItems = [
  {
    iconPath: "/img/icons/search.png",
    iconActivePath: `/img/button activated/search.png`,
    iconText: "Search",
  },
  {
    iconPath: "/img/icons/home.png",
    iconActivePath: `/img/button activated/home.png`,
    iconText: "Home",
  },
  {
    iconPath: "/img/icons/trend.png",
    iconActivePath: `/img/button activated/trend.png`,
    iconText: "Trending",
  },
  {
    iconPath: "/img/icons/camera.png",
    iconActivePath: `/img/button activated/camera.png`,
    iconText: "Web Series",
  },
  {
    iconPath: "/img/icons/movie.png",
    iconActivePath: `/img/button activated/movie.png`,
    iconText: "Movies",
  },
];
const footerItem = [
  { iconPath: "/img/bg5.png", iconText: "Username" },
  { iconPath: "/img/icons/gear.png", iconText: "Settings" },
];

function Navbar() {
  const navState = useSelector((state) => state.nav);
  const { isOpen } = navState;

  return (
    <NavWrapper style={{ width: isOpen ? "212px" : "60px" }}>
      <NavHeader />
      <NavItemWrapper>
        <NavItems items={navItems} />
      </NavItemWrapper>
      <NavFooterWrapper>
        <NavItems items={footerItem} />
      </NavFooterWrapper>
    </NavWrapper>
  );
}
export default Navbar;
