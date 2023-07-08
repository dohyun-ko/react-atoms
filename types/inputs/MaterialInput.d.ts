import React from "react";
export interface MaterialInputProps {
    label: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    inputRef?: React.Ref<HTMLInputElement>;
    width?: React.CSSProperties["width"];
}
declare const MaterialInput: ({ label, inputProps, inputRef, width, }: MaterialInputProps) => any;
export default MaterialInput;
