import './App.css'
import Request from "./components/Request/Request"
import Services from "./components/Servicces/Services"
import Payment from "./components/Payment/Payment"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"


function App() {
  return (
    <div className="App">
    
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/request">
            <Home />
            <Request/>
          </Route>
          <Route path="/services">
            <Home />
            <Services/>
          </Route>
          <Route path="/payment">
            <Home />
            <Payment/>
          </Route>
        </Switch>
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
