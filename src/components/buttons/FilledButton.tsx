import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

export interface FilledButtonProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  hoverBackgroundColor?: React.CSSProperties["backgroundColor"];
  size?: "small" | "medium" | "large";
}

const FilledButton = styled(Button)<FilledButtonProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.primary};

  &:hover {
    background-color: ${({ theme, hoverBackgroundColor }) =>
      hoverBackgroundColor ?? theme.secondary};
  }

  transition: transform ease-in 0.1s;

  &:active {
    transform: scale(0.95);
  }

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 0.75rem;
          padding: 5px 8px;
          border-radius: 6px;
        `;
      case "medium":
      default:
        return css`
          font-size: 1rem;
          padding: 8px 12px;
          border-radius: 8px;
        `;
      case "large":
        return css`
          font-size: 1.25rem;
          padding: 10px 16px;
          border-radius: 10px;
        `;
    }
  }}
`;

export default FilledButton;
