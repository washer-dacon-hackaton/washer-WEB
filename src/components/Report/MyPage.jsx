import PostBox from './PostBox';

function MyPage(){
  // 가상의 데이터
  const posts = [
    { id: 1, title: '글 제목 1', content: '글 내용 1' },
    { id: 2, title: '글 제목 2', content: '글 내용 2' },
    { id: 3, title: '글 제목 3', content: '글 내용 3' },
  ];

  // 수정 버튼 클릭 핸들러
  const handleEdit = (id) => {
    alert(`수정 클릭됨: ${id}`);
  };

  // 삭제 버튼 클릭 핸들러
  const handleDelete = (id) => {
    alert(`삭제 클릭됨: ${id}`);
  };

  return (
    <div>
      <h1>내가 쓴 글 목록</h1>
      <div style={styles.container}>
        {posts.map(post => (
          <PostBox
            key={post.id}
            title={post.title}
            content={post.content}
            onEdit={() => handleEdit(post.id)}
            onDelete={() => handleDelete(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  }
};

export default MyPage;
