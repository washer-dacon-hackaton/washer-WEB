import { css } from "@emotion/react";

// export const calcRem = (px) => `${px / 16}rem`;
// calcRem이 필요한 이유? 단순 반응형에 대한 대응으로 필요한건가? 맞는 듯. 제외해도 됨.

export const typo = {
  Head: {
    h0: css`
      font-family: "Pretendard";
      font-size: 64px;
      font-weight: 900;
      line-height: 150%;
      letter-spacing: -2.5%;
    `,
    h1: css`
      font-family: "Pretendard";
      font-size: 24px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -2.5%;
    `,
    h2: css`
      font-family: "Pretendard";
      font-size: 20px;
      font-weight: 700;
      line-height: 130%;
      letter-spacing: -2.5%;
    `,
    h3: css`
      font-family: "Pretendard";
      font-size: 16px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: -1%;
    `,
  },
  Body: {
    b0: css`
      font-family: "Pretendard";
      font-size: 20px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: -2.5%;
    `,
    b1: css`
      font-family: "Pretendard";
      font-size: 16px;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: -2.5%;
    `,
    b2: css`
      font-family: "Pretendard";
      font-size: 14px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: -2.5%;
    `,
    b3: css`
      font-family: "Pretendard";
      font-size: 12px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: 0%;
    `,
  },
};
