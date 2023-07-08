import React, { CSSProperties } from "react";
export interface ButtonProps {
    width?: React.CSSProperties["width"];
    height?: string;
    border?: CSSProperties["border"];
    borderRadius?: CSSProperties["borderRadius"];
    backgroundColor?: React.CSSProperties["backgroundColor"];
    disabled?: boolean;
}
declare const Button: any;
export default Button;
