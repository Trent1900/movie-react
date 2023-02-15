import styled from "styled-components";

const MaskWrapper = styled.div`
  position: absolute;
  top: 0;
  height: inherit;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: 329px;
`;
function MaskY() {
  return <MaskWrapper />;
}
export default MaskY;
