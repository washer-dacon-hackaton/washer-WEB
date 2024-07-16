// emotion-reset 라이브러리: reset.css를 자동으로 이용할 수 있음.

/** reset.css가 왜 필요한데?
 *
 * user agent stylesheet라는 기본적인 스타일 속성이 브라우저에 설정되어 있음.
 * 작성자 스타일이 브라우저 스타일보다 우선시 되긴 함.
 */

import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const GlobalStyle = css`
  ${emotionReset}
`;
