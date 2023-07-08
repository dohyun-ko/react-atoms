import React, { useContext } from "react";
import styled from "styled-components";
import { Circle } from "../figures";
import { ThemeContext } from "../theme/ThemeContext";

const KebabWrapper = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3px;

  border-radius: 3px;
`;

export interface KebabProps {
  style?: React.CSSProperties;
}

const Kebab = ({ style }: KebabProps) => {
  const theme = useContext(ThemeContext);

  return (
    <KebabWrapper style={style}>
      <Circle diameter={"3px"} backgroundColor={theme.primaryText} />
      <Circle diameter={"3px"} backgroundColor={theme.primaryText} />
      <Circle diameter={"3px"} backgroundColor={theme.primaryText} />
    </KebabWrapper>
  );
};

export default Kebab;
