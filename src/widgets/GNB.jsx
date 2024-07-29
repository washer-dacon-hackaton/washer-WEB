import styled from "@emotion/styled";
import logo from "../assets/logo,png";

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
`;

export const GNB = ({ user }) => {
  return (
    <Wrapper>
      <img src={logo} alt={"우리행복"} width={"90px"}></img>
      <div>{user.name} 님</div>
    </Wrapper>
  );
};

// Wrapper가 필요한 이유가 무엇인지 알아보기
// 보니까 Wrapper 파일에 Space랑 Flex가 있는데.. 이게 왜 필요하지?
