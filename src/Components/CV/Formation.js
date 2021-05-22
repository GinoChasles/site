import React, {Component} from "react";
import data from "../data/info.json";
import "./CSS/Formation.css";

import Canvas2018 from "./Canvas/Canvas2018";
import Canvas2012 from "./Canvas/Canvas2012";
import Canvas2020 from "./Canvas/Canvas2020";
import Canvas2014 from "./Canvas/Canvas2014";

export default class Formation extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: null};
        this.handleClick = (what) => {
            this.setState({clicked: what});
        };
    }

    render() {
        return (
            <div className="blockformation">
                <div className="form">
                    <ul id="form-ul-1" onClick={() => this.handleClick("form")}>
                        <li>{data.formations[0].date}</li>
                        <li>{data.formations[0].diplome}</li>
                    </ul>

                    {this.state.clicked !== "form" ? null : (
                        <div onClick={() => this.handleClick(null)}>
                            <ul className="ul-cache">
                                <li>{data.formations[0].explication}</li>
                                <li>{data.formations[0].ecole}</li>
                                <li>{data.formations[0].lieu}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="experience" id={data.experiences[0].id} >
                    
                        <ul onClick={() => this.handleClick("experience")}>
                            <li>{data.experiences[0].date}</li>
                            <li>{data.experiences[0].poste}</li>
                        </ul>
                    {this.state.clicked !== "experience" ? null : (
                        <div onClick={() => this.handleClick(null)}>
                        <ul className="exp-ul-cache" >
                            <li>{data.experiences[0].entreprise}</li>
                            <li>{data.experiences[0].lieu}</li>
                            <li>{data.experiences[0].information}</li>
                        </ul>
                        </div>
                    )}
                </div>
                <Canvas2020/>
                <div className="skill" >
                    <ul id="skill-ul-1">
                        <li>{data.softskills[0].skill}</li>
                        <li>{data.softskills[1].skill}</li>
                        <li>{data.softskills[2].skill}</li>
                    </ul>
                </div>




                <div className="form">
                    <ul id="form-ul-2" onClick={() => this.handleClick("form")}>
                        <li>{data.formations[1].date}</li>
                        <li>{data.formations[1].diplome}</li>
                    </ul>
                    {this.state.clicked !== "form" ? null : (
                        <div id="form-ul-2-cache" onClick={() => this.handleClick(null)}>
                            <ul >
                                <li>{data.formations[1].explication}</li>
                                <li>{data.formations[1].ecole}</li>
                                <li>{data.formations[1].lieu}</li>
                            </ul>
                        </div>
                    )}
                </div>


                <div className="experience" id={data.experiences[1].id}>
                        <ul onClick={() => this.handleClick("experience")}>
                            <li>Mai 2016 - Août 2017</li>
                            <li>{data.experiences[1].poste}</li>
                        </ul>

                    {this.state.clicked !== "experience" ? null : (
                        <div onClick={() => this.handleClick(null)}>
                            <ul className="ul-cache exp-6-ul-cache">
                                <li>{data.experiences[1].date}</li>
                                <li>{data.experiences[1].entreprise}</li>
                                <li>{data.experiences[1].lieu}</li>
                                <li>{data.experiences[1].information}</li>
                            </ul><br/>
                            <ul className="ul-cache exp-6-ul-cache">
                                <li>{data.experiences[2].date}</li>
                                <li>{data.experiences[2].entreprise}</li>
                                <li>{data.experiences[2].lieu}</li>
                                <li>{data.experiences[2].information}</li>
                            </ul>
                        </div>
                    )}
                    <div className="experience" id={data.experiences[3].id}>
                        <ul onClick={() => this.handleClick("experience")}>
                            <li>{data.experiences[3].date}</li>
                            <li>{data.experiences[3].poste}</li>
                        </ul>
                    </div>
                    {this.state.clicked !== "experience" ? null : (
                            <ul className="ul-cache" id="exp-4-ul-cache"  onClick={() => this.handleClick(null)}>
                                <li>{data.experiences[3].entreprise}</li>
                                <li>{data.experiences[3].lieu}</li>
                                <li>{data.experiences[3].information}</li>
                            </ul>
                    )}
                </div>
                <Canvas2018/>
                <div className="skill">
                    <ul id="skill-ul-2">
                        <li>{data.softskills[3].skill}</li>
                        <li>{data.softskills[4].skill}</li>
                    </ul>
                </div>





                <div className="form">
                    <ul id="form-ul-3" onClick={() => this.handleClick("form")}>
                        <li>{data.formations[2].date}</li>
                        <li>{data.formations[2].diplome}</li>
                    </ul>
                    {this.state.clicked !== "form" ? null : (
                        <div onClick={() => this.handleClick(null)}>
                            <ul className="ul-cache" id="form-3-ul-cache">
                                <li>{data.formations[2].explication}</li>
                                <li>{data.formations[2].ecole}</li>
                                <li>{data.formations[2].lieu}</li>
                            </ul>
                        </div>
                    )}
                </div>
             

                <div className="experience" id={data.experiences[6].id}>
                    <ul onClick={() => this.handleClick("experience")}>
                        <li>Juillet 2012 - janvier 2015</li>
                        <li>{data.experiences[6].poste}</li>
                    </ul>

                    {this.state.clicked !== "experience" ? null : (
                        <div onClick={() => this.handleClick(null)}>
                            <ul className="ul-cache" id="exp-1-ul-cache">
                                <li>{data.experiences[4].entreprise}</li>
                                <li>{data.experiences[4].lieu}</li>
                                <li>{data.experiences[4].information}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <Canvas2014/>
                <div className="skill">
                    <ul id="skill-ul-3">
                        <li>{data.softskills[5].skill}</li>
                        <li>{data.softskills[6].skill}</li>
                    </ul>
                </div>




                <div className="form">
                    <ul id="form-ul-4" onClick={() => this.handleClick("form")}>
                        <li>{data.formations[3].date}</li>
                        <li>{data.formations[3].diplome}</li>
                    </ul>
                    {this.state.clicked !== "form" ? null : (
                        <div onClick={() => this.handleClick(null)}>
                            <ul className="ul-cache" id="form-4-ul-cache">
                                <li>{data.formations[3].explication}</li>
                                <li>{data.formations[3].ecole}</li>
                                <li>{data.formations[3].lieu}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <Canvas2012/>
                <div className="skill">
                    <ul id="skill-ul-4">
                        <li>{data.softskills[7].skill}</li>
                        <li>{data.softskills[8].skill}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

