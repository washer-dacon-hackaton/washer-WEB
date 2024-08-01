import Graph1 from ".//Graph1";
import Graph2 from ".//Graph2";
import Graph3 from ".//Graph3";

function Graphboard(){
  return(
    <div style={{height:700}}>
      <h1 style={{fontSize:20}}>감정그래프</h1>
      <h1 style={{fontSize:10}}>어떤 감정들이 느껴졌는지 그래프로 확인해볼까요?</h1>
      <Graph1></Graph1>
      <Graph2></Graph2>
      <Graph3></Graph3>
  
  </div>
  )
}

export default Graphboard;
