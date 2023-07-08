import React from "react";
export interface ModalProps {
    children?: React.ReactNode;
    onClose: () => void;
    animation?: boolean;
    style?: React.CSSProperties;
}
declare const Modal: {
    ({ children, onClose, style, animation }: ModalProps): any;
    Title: React.FC<ModalTitleProps>;
    CloseButton: () => any;
    Button: React.FC<ButtonProps>;
    CancelButton: React.FC<ButtonProps>;
    ButtonContainer: any;
};
export default Modal;
interface ButtonProps {
    text?: string;
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
    backgroundColor?: React.CSSProperties["backgroundColor"];
    disabled?: boolean;
    style?: React.CSSProperties;
}
interface ModalTitleProps {
    text: string;
    style?: React.CSSProperties;
}
export declare const CloseButton: () => any;
