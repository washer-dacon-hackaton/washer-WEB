/** @jsx jsx */
import { css } from "@emotion/react";

export const Space = ({ height }) => {
  return (
    <div
      className={css`
        width: 100%;
        height: ${height}px;
      `}
    ></div>
  );
};
