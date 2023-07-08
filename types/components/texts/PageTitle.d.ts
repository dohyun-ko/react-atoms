import React from "react";
interface PageTitleProps {
    title: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}
declare const PageTitle: ({ title, onClick, style }: PageTitleProps) => any;
export default PageTitle;
