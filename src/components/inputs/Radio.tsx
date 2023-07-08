import React from "react";
import styled from "styled-components";
import Text from "../texts/Text";

//TODO: Refactor this with Compound Component Pattern

const WrapperLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  vertical-align: middle;
  appearance: none;
  border: 2px solid gray;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  margin-right: 0.75em;

  :checked {
    border: 0.4em solid ${({ theme }) => theme.primary};
  }

  :focus-visible {
    outline-offset: 2px;
    outline: 2px dotted ${({ theme }) => theme.primary};
  }

  :hover {
    box-shadow: 0 0 0 4px lightgray;
    cursor: pointer;
  }

  :disabled {
    background-color: lightgray;
    box-shadow: none;
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

interface RadioButtonProps {
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  labelStyle?: React.CSSProperties;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  disabled,
  onChange,
  labelStyle,
}) => {
  return (
    <WrapperLabel style={labelStyle}>
      <RadioInput
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Text style={{ verticalAlign: "middle", opacity: disabled ? 0.7 : 1.0 }}>
        {label}
      </Text>
    </WrapperLabel>
  );
};

export default RadioButton;
