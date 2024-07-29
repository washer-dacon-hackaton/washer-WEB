import { css } from "@emotion/react";

// export const calcRem = (px) => `${px / 16}rem`;
// calcRem이 필요한 이유? 단순 반응형에 대한 대응으로 필요한건가? 맞는 듯. 제외해도 됨.

export const typo = {
  heading: css`
    font-family: "Pretendard";
    /** 폰트 패밀리 자체에 대한 공부가 필요할 듯..*/
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0%;
  `,
  default: css`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0%;
  `,
};
