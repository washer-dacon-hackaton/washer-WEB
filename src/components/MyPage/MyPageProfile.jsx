import { css } from "@emotion/react";
import { IconButton } from "../utils/IconButton";

export const MyPageProfile = ({ user }) => {
  let User = user;

  return (
    <div className={css``}>
      <img src={User.profile}></img>
      <div>
        <div>{User.name}</div>
        <div>{User.region}</div>
      </div>
      <div>
        <IconButton icon="edit" text="내가 작성한 글 보기" />
        <IconButton icon="like" text="내가 좋아하는 글 보기" />
      </div>
    </div>
  );
};
