import { css } from "@emotion/react";
import { Button } from "wowds-ui";

export const MyPageBox = ({
  title,
  sentence,
  body = null,
  isButton = false,
}) => {
  return (
    <div className={css``}>
      <div>{title}</div>
      <div>{sentence}</div>
      <div>{body ? body : null}</div>
      <div>{isButton ? <Button></Button> : null}</div>
    </div>
  );
};
