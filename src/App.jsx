import "./App.css";
import { GNB } from "./widgets/GNB";

function App() {
  return (
    <>
      <GNB user={{ name: "이혁" }} breadcrumbs={"메인 페이지"}></GNB>
    </>
  );


export default App;
