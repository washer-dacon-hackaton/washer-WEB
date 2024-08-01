import "./App.css";
import { GNB } from "./widgets/GNB";
import {} from "react-router-dom";
import { ProfileBox } from "./widgets/ProfileBox";
function App() {
  return (
    <>
      <GNB user={{ name: "이혁" }} breadcrumbs={"메인 페이지"}></GNB>
      <ProfileBox
        user={{ name: "이혁", country: "대한민국", lang: "한국어" }}
      ></ProfileBox>
    </>
  );
}

export default App;
