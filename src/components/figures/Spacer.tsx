import React from "react";
import styled from "styled-components";

interface SpaceProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
}

const Spacer = styled.div<SpaceProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  flex-grow: 1;
`;

export default Spacer;
