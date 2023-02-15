import styled from "styled-components";

const BadgeWrapper = styled.div`
  display: flex;
  width: 85px;
  justify-content: space-between;
`;
function Imba() {
  return (
    <BadgeWrapper>
      <span>
        <img src="/img/imdb.png" alt="imdb" />
      </span>
      <span> 8.8/10</span>
    </BadgeWrapper>
  );
}
export default Imba;
