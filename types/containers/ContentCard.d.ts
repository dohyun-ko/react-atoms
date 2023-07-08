import React from "react";
interface ContentCardContainerProps {
    border?: React.CSSProperties["border"];
    backgroundColor?: React.CSSProperties["backgroundColor"];
    padding?: React.CSSProperties["padding"];
}
interface ContentCardProps extends ContentCardContainerProps {
    children?: React.ReactNode;
}
declare const ContentCard: {
    (props: ContentCardProps): any;
    Title: ({ children }: ContentCardTitleProps) => any;
};
interface ContentCardTitleProps {
    children?: React.ReactNode;
}
export default ContentCard;
