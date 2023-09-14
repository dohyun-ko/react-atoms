import React, { createContext, useContext, useEffect } from "react";
import { MyThemeContext } from "src/themes";
import styled, { css, keyframes } from "styled-components";
import xIcon from "../assets/icon-x.svg";
import FilledButton from "../buttons/FilledButton";
import Text from "../texts/Text";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

interface ModalContainerProps {
  animation?: boolean;
}

const ModalContainer = styled.div<ModalContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  background-color: white;
  padding: 25px 45px;
  border-radius: 8px;

  ${(props) =>
    props.animation
      ? css`
          animation-duration: 0.2s;
          animation-timing-function: ease-out;
          animation-name: ${slideUp};
          animation-fill-mode: forwards;
        `
      : ""}
`;

interface contextType {
  onClose: () => void;
}

const ModalContainerContext = createContext<contextType>({
  onClose: () => {},
});

export interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
  animation?: boolean;
  style?: React.CSSProperties;
}

const Modal = ({ children, onClose, style, animation }: ModalProps) => {
  useEffect(() => {
    const listenBackEvent = (e: any) => {
      onClose();
    };
    if (window.history.state?.name !== "preventBack") {
      window.history.pushState(
        {
          name: "preventBack",
        },
        "",
        window.location.href
      );
    }

    window.addEventListener("popstate", listenBackEvent);
    return () => {
      window.removeEventListener("popstate", listenBackEvent);
    };
  }, []);

  return (
    <ModalContainerContext.Provider
      value={{
        onClose: onClose,
      }}
    >
      <ModalContainer
        animation={animation}
        style={{
          width: "410px",
          ...style,
        }}
        onClick={(evt) => evt.stopPropagation()}
      >
        {children}
      </ModalContainer>
    </ModalContainerContext.Provider>
  );
};

export default Modal;

interface ButtonContainerProps {
  direction?: "row" | "column";
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  flex-direction: ${(props) => props.direction ?? "row"};
`;

interface ButtonProps {
  text?: string;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  disabled?: boolean;
  style?: React.CSSProperties;
}

const CancelButton: React.FC<ButtonProps> = ({
  text = "취소",
  onClick,
  backgroundColor,
  disabled,
  style,
}) => {
  const { onClose } = useContext(ModalContainerContext);
  const theme = useContext(MyThemeContext);

  return (
    <FilledButton
      disabled={disabled}
      height={"57px"}
      backgroundColor={backgroundColor ?? "#D0D0D0"}
      borderRadius={"8px"}
      onClick={onClick ?? onClose}
      style={{
        flex: "1 1 0",
        ...style,
      }}
    >
      <Text weight={700} size={"1.125rem"}>
        {text}
      </Text>
    </FilledButton>
  );
};

const Button: React.FC<ButtonProps> = ({
  text = "확인",
  onClick,
  backgroundColor,
  style,
  disabled,
}) => {
  const theme = useContext(MyThemeContext);

  return (
    <FilledButton
      disabled={disabled}
      height={"45px"}
      backgroundColor={backgroundColor ?? theme.primary}
      borderRadius={"8px"}
      onClick={onClick}
      style={{
        flex: "1 1 0",
        ...style,
      }}
    >
      <Text weight={700} size={"1.125rem"}>
        {text}
      </Text>
    </FilledButton>
  );
};

interface ModalTitleProps {
  text: string;
  style?: React.CSSProperties;
}

const Title: React.FC<ModalTitleProps> = ({ text, style }) => {
  return (
    <Text
      size={"1.25rem"}
      weight={"bold"}
      style={{
        marginBottom: "20px",
        ...style,
      }}
    >
      {text}
    </Text>
  );
};

const XButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const XIcon = styled.img`
  width: 12px;
  height: 12px;
`;

export const CloseButton = () => {
  const { onClose } = useContext(ModalContainerContext);

  return (
    <XButton onClick={onClose}>
      <XIcon src={xIcon} />
    </XButton>
  );
};

Modal.Title = Title;
Modal.CloseButton = CloseButton;
Modal.Button = Button;
Modal.CancelButton = CancelButton;
Modal.ButtonContainer = ButtonContainer;
