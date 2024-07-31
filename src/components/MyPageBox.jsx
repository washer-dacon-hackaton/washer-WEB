import { Button } from "wowds-ui";

export const MyPageBox = ({
  title,
  sentence,
  body = null,
  isButton = false,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{sentence}</div>
      <div>{body ? body : null}</div>
      <div>{isButton ? <Button></Button> : null}</div>
    </div>
  );
};
