import styled from "styled-components";
const NavFooterWrapper = styled.div`
  border: 1px solid #000;
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 30px;
  cursor: pointer;
`;
function NavFooter() {
  return (
    <NavFooterWrapper>
      <ItemWrapper>
        <img src="/img/icons/gear.png" alt="avatar" />
        <p>ux_dhrux</p>
      </ItemWrapper>
      <ItemWrapper>
        <img src="/img/icons/gear.png" alt="avatar" />
        <p>Settings</p>
      </ItemWrapper>
    </NavFooterWrapper>
  );
}
export default NavFooter;
