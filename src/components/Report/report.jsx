import './App.css'
import Box1 from "./components/Box1";
import Box2board from "./components/Box2board";
import Graphboard from "./components/Graphboard";


function App() {
  return (
    <div className="App">
    <h1> 우리행복</h1>
    <section>
      <Box1></Box1>
    </section>
    <section>
      <Box2board></Box2board>
    </section>
    <section>
      <Graphboard></Graphboard>
    </section>
    </div>
  )
}

export default App
