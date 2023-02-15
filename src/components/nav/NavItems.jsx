import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 30px;
  cursor: pointer;
`;
const ImageBox = styled.img`
  display: block;
  height: 25px;
  align-self: center;
`;
const TextWrapper = styled.div`
  width: 100%;
`;
const TextBox = styled.p`
  text-align: center;
  line-height: 26px;
  font-size: 22px;
  margin: 0;
  color: #686868;
  :hover {
    color: white;
  }
`;
const handleRouterText = (text) => {
  const routeDictionary = {
    search: "search",
    home: "",
    trending: "trending",
    "web series": "web-series",
    movies: "movies",
    settings: "settings",
    username: "profile",
  };

  return routeDictionary[text.toLowerCase()];
};
function NavItems(props) {
  const { items } = props;
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const navState = useSelector((state) => state.nav);
  const { isOpen } = navState;

  const handleNavItemClick = (e) => {
    setIsActive(true);
    const nodeText = e.target.alt || e.target.innerHTML;
    const routeText = handleRouterText(nodeText);
    // console.log(nodeText, "@nav items routeText");
    // console.log(routeText, "@nav items routeText");

    if (routeText === "search") console.log("pop up a modal to search");
    if (routeText !== "search") navigate(`/${routeText}`);
  };
  return (
    <>
      {items.map((item, index) => (
        <NavItem onClick={handleNavItemClick} key={index}>
          <ImageBox src={item.iconPath} alt={item.iconText} />
          {isOpen && (
            <TextWrapper>
              <TextBox>{item.iconText}</TextBox>
            </TextWrapper>
          )}
        </NavItem>
      ))}
    </>
  );
}
export default NavItems;
