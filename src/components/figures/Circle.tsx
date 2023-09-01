import React from "react";
import styled from "styled-components";

export interface CircleProps {
  diameter: React.CSSProperties["width"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
}

const Circle = styled.div<CircleProps>`
  height: ${({ diameter }) => diameter};
  width: ${({ diameter }) => diameter};
  border-radius: 50%;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.primary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Circle;
