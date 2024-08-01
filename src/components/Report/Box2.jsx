
const Box2 = () => {
  const boxStyle = {
    width: '150px',  // 박스의 가로 크기
    height: '130px', // 박스의 세로 크기
    backgroundColor: 'rgba(217, 217, 217, 1)', // 배경색
    border: '2px solid gray', // 테두리 스타일
    display: 'flex', // 플렉스 박스 사용
    flexDirection: 'column', // 플렉스 방향을 컬럼으로 설정
    justifyContent: 'flex-start', // 상단에 위치시키기 위해 플렉스 시작 지점으로 정렬
    alignItems: 'center', // 가로 가운데 정렬
    paddingTop: '10px', // 글자를 조금 더 위로 이동시키기 위한 패딩
    fontSize: '18px', // 글자 크기
    color: 'black', // 글자 색상
    margin: '20px', 
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // 뷰포트 높이의 100%로 부모 요소를 꽉 채움
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        행복점수
      </div>
    </div>
  );
};

export default Box2;