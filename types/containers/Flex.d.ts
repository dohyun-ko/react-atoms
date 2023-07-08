import React from "react";
export interface Flex {
    flexDirection?: React.CSSProperties["flexDirection"];
    justifyContent?: React.CSSProperties["justifyContent"];
    alignItems?: React.CSSProperties["alignItems"];
    gap?: React.CSSProperties["gap"];
    wrap?: React.CSSProperties["flexWrap"];
    width?: React.CSSProperties["width"];
    height?: React.CSSProperties["height"];
    flex?: React.CSSProperties["flex"];
}
declare const Flex: any;
export default Flex;
