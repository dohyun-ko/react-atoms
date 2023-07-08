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
declare const Grid: any;
export default Grid;
