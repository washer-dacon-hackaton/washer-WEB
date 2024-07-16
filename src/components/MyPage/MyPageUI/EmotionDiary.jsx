import { css } from "@emotion/react";
import { MyPageBox } from "../MyPageBox";
import { Button } from "wowds-ui";

export const EmotionDiary = () => {
  let buttonList = <Button></Button>;
  let boxStyle = css``;

  /** 중점적으로 공부해야 할 개념
   *
   * 1. props와 children이 어떤 차이가 있는지
   * 2. 값을 불러올 때는 어떤걸 사용해야 하는지, 용도 확인
   */

  let isSubmitted = true;

  return (
    <div className={boxStyle}>
      ({isSubmitted} ?
      <MyPageBox
        title="오늘의 감정 일기장"
        sentence="오늘 하루 어떤 감정이었는지 아래 단어들을 선택해봐요."
        body={buttonList}
        isButton={true}
      ></MyPageBox>
      :
      <MyPageBox
        title="오늘의 감정 일기장"
        sentence="인공지능이 여러분에게 할 말이 있대요!"
        body={buttonList}
      ></MyPageBox>
      )
    </div>
  );
};
