import React from "react";
interface RadioButtonProps {
    name: string;
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    labelStyle?: React.CSSProperties;
}
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
