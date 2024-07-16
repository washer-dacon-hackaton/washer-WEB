import { css } from "@emotion/react";

export const IconButton = ({ icon, text }) => {
  return (
    <div className={css``}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};
