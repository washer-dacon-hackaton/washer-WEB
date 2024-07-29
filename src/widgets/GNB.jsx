import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { typo, palette } from "../shared/styles/index";

const Wrapper = styled.div`
  width: 100vw;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${palette.Gray.gray30};
  box-sizing: border-box;
  padding: 20px;

  position: fixed;
  top: 0;
  z-index: 10; // 스크롤하더라도 GNB가 가장 위에 있도록 설정함.

  .gnb-title {
    display: flex;
    align-items: center;
    gap: 40px;

    div {
      color: ${palette.Gray.gray50};
      ${typo.Body.b1};
    }
  }
  .gnb-user {
    color: ${palette.Gray.gray90};
    ${typo.Head.h3}
  }
`;

export const GNB = (props) => {
  return (
    <Wrapper>
      <div className="gnb-title">
        <img src={logo} alt={"우리행복"} width={"90px"} height={"26px"}></img>
        <div>{props?.breadcrumbs}</div>{" "}
        {/** 상태 관리를 통해서 breadcrumbs 관리해야 할듯 ? */}
      </div>
      <div className="gnb-user">{props?.user.name} 님</div>
    </Wrapper>
  );
};
