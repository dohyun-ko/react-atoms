// TODO: Fix this file

import React from "react";
import reactDom from "react-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  background-color: rgba(0, 0, 0, 0.28);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot || !children) {
    return null;
  }

  return reactDom.createPortal(
    <ModalBackdrop>children</ModalBackdrop>,
    modalRoot
  );
};

export default ModalPortal;
