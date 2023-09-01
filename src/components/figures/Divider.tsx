import styled, { css } from "styled-components";

interface DividerProps {
  vertical?: boolean;
}

const Divider = styled.div`
  background-color: black;
  opacity: 0.15;

  ${(props: DividerProps) =>
    props.vertical
      ? css`
          width: 1px;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 1px;
        `};
`;

export default Divider;
