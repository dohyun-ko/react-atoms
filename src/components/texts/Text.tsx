import React from "react";
import styled from "styled-components";

export interface TextProps {
  font?: string;
  size?: React.CSSProperties["fontSize"];
  weight?: React.CSSProperties["fontWeight"];
  textAlign?: React.CSSProperties["textAlign"];
  color?: React.CSSProperties["color"];
  display?: React.CSSProperties["display"];
  textDecoration?: React.CSSProperties["textDecoration"];
  letterSpacing?: React.CSSProperties["letterSpacing"];
  lineHeight?: React.CSSProperties["lineHeight"];
  stroke?: React.CSSProperties["stroke"];
  textShadow?: React.CSSProperties["textShadow"];
}

const Text = styled.p<TextProps>`
  display: ${({display}) => display || "block"};
  word-break: keep-all;
  margin: 0;
  text-align: ${({textAlign}) => textAlign || "inherit"};
  color: ${({color}) => color || "inherit"};
  font-family: ${({font}) => (font ?? "inherit")};
  font-size: ${({size}) => size ?? "1rem"};
  font-weight: ${({weight}) => weight ?? "inherit"};
  line-height: ${({lineHeight, size}) =>
          lineHeight ?? `calc(1.5 * ${size ?? "1rem"})`};
  text-decoration: ${({textDecoration}) => textDecoration || undefined};
  letter-spacing: ${({letterSpacing}) => letterSpacing || "-0.5px"};
  -webkit-text-stroke: ${({stroke}) => stroke || undefined};
  text-shadow: ${({textShadow}) => textShadow || undefined};
`;

export default Text;
