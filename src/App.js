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
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf"} height="500px" width="100%" title="cv"></embed>
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf#view=FitBH"} height="500px" width="100%" title="cv"></embed>
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf#view=Fit"} height="500px" width="100%" title="cv"></embed>
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf#view=FitH"} height="500px" width="100%" title="cv"></embed>
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf#view=FitV"} height="500px" width="100%" title="cv"></embed>
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf#view=FitB"} height="500px" width="100%" title="cv"></embed>
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf#view=FitBV"} height="500px" width="100%" title="cv"></embed>
       
        <object type="application/pdf" data={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino.pdf"} height="500px" width="100%" title="cv"></object>
        <object type="application/pdf" data="site/images/CV_Chasles_Gino.pdf" height="500px" width="100%" title="cv"></object>
          
          <Formation />
        </Route>
        <Route path="/portfolio"><Profil/></Route>
        <Route path="/passions" ><div>portfolio</div>
        <embed type="application/pdf" src={process.env.PUBLIC_URL + "/CV_Chasles_Gino.pdf#zoom=50"} height="500px" width="100%" title="cv"></embed>
        <img src={process.env.PUBLIC_URL + "/CV_Chasles_Gino_OC.png"} height="50%" width="80%" title="cv" alt="cv"></img>
        <img src={process.env.PUBLIC_URL + "/images/CV_Chasles_Gino_OC.png"} height="50%" width="80%" title="cv" alt="cv"></img>
    </Route>
        <Route path="/contact"><div>contact</div></Route>

     </Switch>
    </Router>

  );
}

export default App;
