import styled from "styled-components";

export interface ContentAreaProps {
  width?: string;
}

const Content = styled.div<ContentAreaProps>`
  width: ${({ theme, width }) => (width ? width : theme.CONTENT_AREA_DESKTOP)};
  max-width: 1240px;

  @media screen and (max-width: 768px) {
    width: ${({ theme, width }) => (width ? width : theme.CONTENT_AREA_MOBILE)};
  }
`;

export default Content;
