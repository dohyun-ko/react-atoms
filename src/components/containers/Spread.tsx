import styled from "styled-components";

interface SpreadProps {
  isSpread: boolean;
}

const Spread = styled.div<SpreadProps>`
  height: ${({ isSpread }) => (isSpread ? "100%" : "0px")};
  overflow: hidden;

  //transition: height 0.3s ease-in-out;
`;

export default Spread;
