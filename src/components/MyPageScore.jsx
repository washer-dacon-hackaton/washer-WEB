export const MyPageScore = ({ user }) => {
  // user의 행복 보고서 값을 호출함.
  // 호출 후 아래 변수에 값을 저장해서 출력함.
  let score = user.score;

  return (
    <div>
      <div>{"행복점수"}</div>
      <div>{score}</div>
    </div>
  );
};
