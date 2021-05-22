import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

import NavBar from "./Components/CV/NavBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Form from "./Components/Contact/Form";

function App() {
  return (
    <Router>
      <header className="App-header"></header>
      <NavBar />
     <Switch>
        <Route path="/cv">
         <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf#view=FitH"}  title="cv"></embed>
        </Route>
        <Route path="/portfolio"><Portfolio/></Route>
        <Route path="/passions" ></Route>
        <Route path="/contact"><Form/></Route>

     </Switch>
    </Router>

  );
}

export default App;
