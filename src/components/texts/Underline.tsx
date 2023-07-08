import React from "react";
import styled from "styled-components";

interface UnderlineProps {
  color?: React.CSSProperties["color"];
  size?: React.CSSProperties["backgroundSize"];
}

const Underline = styled.span<UnderlineProps>`
  background-image: ${({ theme, color }) =>
    color
      ? `linear-gradient(${color}, ${color})`
      : `linear-gradient(${theme.primary}, ${theme.primary})`};
  background-position: bottom;
  background-size: ${({ size }) => size ?? "100% 57%"};
  background-repeat: no-repeat;
`;

export default Underline;
