import BottomBar from "components/BottomBar";
import Content from "components/Content";
import Sidebar from "./components/Sidebar";
import "./style.css";

function App() {
  return (
    <>
    <div>
      <Sidebar/>
      <Content/>
    </div>
      <BottomBar/>
    </>
  );
}

export default App;
