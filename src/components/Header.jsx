import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const HeaderWrapper = styled.div`
  background-color: khaki;
  text-align: center;
  cursor: pointer;
`;
function Header() {
  const navigate = useNavigate();
  const handleHeaderClick = () => {
    navigate("/");
  };
  return <HeaderWrapper onClick={handleHeaderClick}>Header</HeaderWrapper>;
}
export default Header;
