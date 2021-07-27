import SlideBar from "./components/SlideBar/SlideBar"
import Tabbar from "./components/Tabbar/Tabbar"
import Topbar from "./components/Topbar/Topbar"
import './App.css'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Tabbar/>
      <SlideBar/>
    </div>
  );
}

export default App;
