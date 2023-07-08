import React from "react";
import styled from "styled-components";

const BaseInput = styled.input`
  font-size: 1rem;
  padding: 10px 10px 10px 5px;

  display: block;
  width: calc(100% - 15px);
  border: none;
  border-bottom: 1px solid #757575;

  &:focus {
    outline: none;
  }
`;

const BaseLabel = styled.label`
  color: #999;
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;

  /* active state */
  input:focus ~ &,
  input:not(:placeholder-shown) ~ & {
    top: -20px;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const BottomBar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${({ theme }) => theme.primary};
    transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }

  /* active state */
  input:focus ~ &:before,
  input:focus ~ &:after {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 5px;
`;

export interface MaterialInputProps {
  label: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  width?: React.CSSProperties["width"];
}

const MaterialInput = ({
  label,
  inputProps,
  inputRef,
  width,
}: MaterialInputProps) => {
  return (
    <Wrapper
      style={{
        width,
      }}
    >
      <BaseInput type="text" placeholder={" "} {...inputProps} ref={inputRef} />
      <BottomBar />
      <BaseLabel>{label}</BaseLabel>
    </Wrapper>
  );
};

export default MaterialInput;
