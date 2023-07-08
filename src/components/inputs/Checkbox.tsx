import React, { useId } from "react";
import Flex from "../containers/Flex";

export interface CheckboxProps {
  value?: string | number | readonly string[] | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: React.ReactNode;
  containerStyle?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
}

const Checkbox = ({
  value,
  onChange,
  label,
  containerStyle,
  checkboxStyle,
}: CheckboxProps) => {
  const id = useId();

  return (
    <Flex style={containerStyle} gap={"6px"}>
      <input
        type={"checkbox"}
        id={id}
        value={value ? 1 : 0}
        onChange={onChange}
        style={checkboxStyle}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </Flex>
  );
};

export default Checkbox;
