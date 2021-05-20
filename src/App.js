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
        <iframe src={process.env.PUBLIC_URL + "CV_Chasles_Gino.pdf#view=Fit"} title="cv">
    </iframe>
        
          {/* <Profil />
          <Competence />
          <Formation /> */}
        </Route>
        <Route path="/portfolio"></Route>
        <Route path="/passions" component={<Profil/>}><div>portfolio</div>
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "CV_Chasles_Gino.pdf#zoom=50"} height="500px" width="100%" title="cv">
    </embed>
        <img src={process.env.PUBLIC_URL + "CV_Chasles_Gino_OC.png"} height="50%" width="80%" title="cv" alt="cv">
    </img>
    </Route>
        <Route path="/contact"><div>contact</div></Route>

     </Switch>
    </Router>

  );
}

export default App;
