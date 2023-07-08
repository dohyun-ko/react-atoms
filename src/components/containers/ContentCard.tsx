import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Text from "../texts/Text";

interface ContentCardContainerProps {
  border?: React.CSSProperties["border"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
  padding?: React.CSSProperties["padding"];
}

const ContentCardContainer = styled(Content)<ContentCardContainerProps>`
  border: ${({ border }) => border ?? undefined};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "white"};
  padding: ${({ padding }) => padding ?? "20px"};
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

interface ContentCardProps extends ContentCardContainerProps {
  children?: React.ReactNode;
}

const ContentCard = (props: ContentCardProps) => {
  return (
    <ContentCardContainer {...props}>{props.children}</ContentCardContainer>
  );
};

interface ContentCardTitleProps {
  children?: React.ReactNode;
}

const Title = ({ children }: ContentCardTitleProps) => {
  return (
    <Text size={"1.25rem"} style={{ margin: " 0 0 15px 5px" }}>
      {children}
    </Text>
  );
};

ContentCard.Title = Title;

export default ContentCard;
