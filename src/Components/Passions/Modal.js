import React from "react";
import "../CSS/Modal.css"
export default function Modal(props) {
    return (
        <section className="modal" id={props.els.id}>
            <section className="modal-dialog">
                <div className="modal-content">
                    <a href="/passions" className="closebtn">×</a>
                    <article>{props.els.info}</article>
                    <article>{props.els.infoBis}</article>
                </div>
            </section>
        </section>
    )
}