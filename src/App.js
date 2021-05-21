import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

import Formation from "./Components/Formation";
import Competence from "./Components/Competence";
import Profil from "./Components/Profil";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <Router>
      <header className="App-header"></header>
      <NavBar />
     <Switch>
        <Route path="/cv">
         <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf#view=FitH"}  title="cv"></embed>
        </Route>
        <Route path="/portfolio"></Route>
        <Route path="/passions" ></Route>
        <Route path="/contact"><div>contact</div></Route>

     </Switch>
    </Router>

  );
}

export default App;
