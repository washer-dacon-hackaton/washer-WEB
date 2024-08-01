import Box2 from "./Box2";

function Box2board() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, // 뷰포트 높이의 100%로 부모 요소를 꽉 채움
    backgroundColor: '#F5F5F5', // 전체 배경색
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ backgroundColor: 'lightgray', height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 0 }}>
        <Box2 />
      </h1>
      <h1 style={{ fontSize: 13, textAlign: "center" }}>지난 한 달 간 수고했어요</h1>
    </div>
  );
}

export default Box2board;
