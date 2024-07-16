/** @jsx jsx */
import { css } from "@emotion/React";
// import styled from "@emotion/styled";

const DefaultBox = css`
  width: 100%;
  height: 60px;
`;

export const Breadcrumbs = ({ Breadcrumbs }) => {
  let length = Breadcrumbs.length;
  let arrow;
  let result = <div className={DefaultBox}></div>;

  for (let i = 0; i < length; i++) {
    result.appendChild(length[i]);
    result.appendChild(arrow);
  }
  result.removeChild(arrow);

  return result;
};

// const Wrapper = styled.button`
//   padding: 20px;
// `;
