/** @jsx jsx */
import { css } from "@emotion/React";
import { TabBar } from "wowds-ui";

export const GNB = ({ user }) => {
  // 로고 관련 사진 필요함.

  let userProfile = user.profile;
  return (
    // 유저 프로필 사진을 어떻게 가져올지?
    <div className={css``}>
      <>{/** 로고 들어갈 공간 */}</>
      <TabBar></TabBar>
      <img src={userProfile}></img>
    </div>
  );
};

// Wrapper가 필요한 이유가 무엇인지 알아보기