import SlideBar from "./components/SlideBar/SlideBar"
import Tabbar from "./components/Tabbar/Tabbar"
import Topbar from "./components/Topbar/Topbar"
import './App.css'
import Request from "./components/Request/Request"
import Services from "./components/Servicces/Services"
import Payment from "./components/Payment/Payment"

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Tabbar/>
      <SlideBar/>
      <Request/>
      <Services/>
      <Payment/>
    </div>
  );
}

export default App;
