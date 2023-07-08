import styled from "styled-components";
import React from "react";

export interface GridProps {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  placeItems?: React.CSSProperties["placeItems"];
  gap?: React.CSSProperties["gap"];
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
}

const Grid = styled.div<GridProps>`
  display: grid;
  width: ${({ width }) => width || undefined};
  height: ${({ height }) => height || undefined};
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || "1fr"};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || "1fr"};
  justify-content: ${({ justifyContent }) => justifyContent || "normal"};
  align-items: ${({ alignItems }) => alignItems || "normal"};
  place-items: ${({ placeItems }) => placeItems || "normal"};
  gap: ${({ gap }) => gap || undefined};

  ::-webkit-scrollbar {
    color: transparent;
  }
`;

export default Grid;
