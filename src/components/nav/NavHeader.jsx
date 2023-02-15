import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navVisible } from "../../redux/slice/nav/navSlice";

const NavHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;
const Image = styled.img`
  display: block;
  width: 60px;
`;
const Text = styled.p`
  color: white;
  font-size: 32px;
  /* font-family: "Inter"; */
`;
function NavHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navState = useSelector((state) => state.nav);
  const { isOpen } = navState;

  const handleImgClick = () => {
    navigate("/");
    dispatch(navVisible(!isOpen));
  };
  return (
    <NavHeaderWrapper>
      <Image onClick={handleImgClick} src="/img/menu.png" alt="arrow down" />
      {isOpen && <Text>PLAY</Text>}
    </NavHeaderWrapper>
  );
}
export default NavHeader;
