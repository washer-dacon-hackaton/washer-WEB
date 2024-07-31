import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";

const Wrapper = styled(Flex)`
  ${typo};
  ${palette}
`;

export const MonthlyHappyReport = () => {
  return (
    <Wrapper>
      <div className="ritem-month"></div>
      <div className="ritem-score"></div>
      <div className="ritem-more"></div>
    </Wrapper>
  );
};
