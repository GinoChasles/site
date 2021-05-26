import React, {Component} from "react";
import data from "../../data/info.json"
import Galerie from "./Galerie";
import TestModal from "./TestModal";

export default class TestPassion extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: null,
            passions : null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOff = this.handleClickOff.bind(this);
    }

        handleClick (what) {
            this.setState({clicked: true, passions:what});
        };
        handleClickOff () {
            this.setState({clicked: false, passions:""});
        };

        testfonction = () => {
            return (

                this.state.clicked !== true ? null : (
                        <aside className="modal" >
                            <section className="modal-dialog">
                                <div className="modal-content">
                                    <button className="closebtn" onClick={this.handleClickOff}>×</button>
                                    <Galerie passion={this.state.passions} />
                                </div>
                            </section>
                        </aside>)
            )
        }
    render() {
        return (
            <section id="passion">
                {data.passions.map((el) => {
                    return (
                        <article key={el.id} >
                            <div className="passion-card">
                                <h2>{el.name}</h2>
                                <p>{el.info}</p>
                                <button onClick={()=>this.handleClick(el)} >Plus d'infos</button>
                            </div>
                        </article>
                    )
                })}
                {this.testfonction()}

            </section>
        )}}