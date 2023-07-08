import styled from "styled-components";
import Flex from "../containers/Flex";

const Chip = styled(Flex)`
  padding: 2px 5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
`;

export default Chip;
