import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";

const Wrapper = styled(Flex)`
  ${typo}
  color: ${palette}
`;

export const PostListItem = () => {
  return (
    <Wrapper>
      <div className="pitem-left">
        <div className="pitem-title">{"제목"}</div>
        <div className="pitem-content">{"내용"}</div>
        <div className="pitem-more">{/** 더보기 버튼 */}</div>
      </div>
      <div className="pitem-right"></div>
    </Wrapper>
  );
};
