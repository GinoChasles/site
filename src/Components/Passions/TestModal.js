import React, {Component} from "react";
import data from "../../data/info.json"

export default class TestModal extends Component {
    constructor(props) {
        super(props);
        this.handleClickOff = this.handleClickOff.bind(this);
    }

    handleClickOff () {
        this.setState({clicked: false});
    };

    render() {
        return (
            <section className="modal" id={this.props.els.id}>
                <section className="modal-dialog">
                    <div className="modal-content">
                        <button className="closebtn" onClick={this.handleClickOff}>×</button>
                        <article>{this.props.els.info}</article>
                    </div>
                </section>
            </section>
        )}}