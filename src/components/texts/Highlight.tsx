import React from 'react';
import styled from "styled-components";

interface HighlightProps {
  color?: React.CSSProperties["color"];
  size?: React.CSSProperties["fontSize"];
  weight?: React.CSSProperties["fontWeight"];
}

const Highlight = styled.span<HighlightProps>`
  color: ${({ theme, color }) => color ?? theme.primary};
  font-size: ${({ size }) => size ?? "inherit"};
  font-weight: ${({ weight }) => weight ?? "inherit"};
`;

export default Highlight