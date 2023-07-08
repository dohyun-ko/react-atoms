import React from "react";
export interface CheckboxProps {
    value?: string | number | readonly string[] | boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    label?: React.ReactNode;
    containerStyle?: React.CSSProperties;
    checkboxStyle?: React.CSSProperties;
}
declare const Checkbox: ({ value, onChange, label, containerStyle, checkboxStyle, }: CheckboxProps) => any;
export default Checkbox;
