function PostBox(title, content, Edit, Delete){
  return(
    <div style={styles.box}>
    <h3>{title}</h3>
    <p>{content}</p>
    <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={() => alert('더보기 클릭됨')}>더보기 {" >"} </button>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={Edit}>수정</button>
        <button style={styles.button} onClick={Delete}>삭제</button>
      </div>
    </div>
  </div>
)
}
const styles ={
box:{
  width: "Fixed (840px)px",
height: "Hug (138px)px",
top: "259px",
left: "290px",
padding: "var(--PaddingXL)",
gap: "0px",
borderRadius: "20px 0px 0px 0px",
border: "1px 0px 0px 0px",
justify: "space-between",
opacity: "0px",
},
buttonContainer: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
},
buttonGroup: {
  display: 'flex',
  gap: '10px',
},
button: {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer',
}};

export default PostBox;