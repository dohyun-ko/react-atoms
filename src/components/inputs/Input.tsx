import styled from "styled-components";
import React from "react";

export interface InputProps {
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  padding?: React.CSSProperties["padding"];
}

const Input = styled.input<InputProps>`
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  line-height: normal;
  padding: ${({ padding }) => (padding ? padding : "0.5rem")};
  font-family: inherit;
  border: 1px solid #999;
  border-radius: 5px;
  outline-style: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export default Input;
