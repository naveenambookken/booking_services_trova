import SlideBar from "./components/SlideBar/SlideBar"
import Tabbar from "./components/Tabbar/Tabbar"
import Topbar from "./components/Topbar/Topbar"
import './App.css'
import Request from "./components/Request/Request"

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Tabbar/>
      <SlideBar/>
      <Request/>
    </div>
  );
}

export default App;
