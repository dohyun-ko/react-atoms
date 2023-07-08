import React from "react";
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
declare const Text: any;
export default Text;
