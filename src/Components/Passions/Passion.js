import React from "react";
import data from "../../data/info.json"
import Modal from "./Modal";

export default function Passion() {
    return (
        <section id="passion">
            {data.passions.map((el) => {
                return (
                    <article key={el.id} className="passion-card">
                        <h2>{el.name}</h2>
                        <p>{el.info}</p>
                        <p>{el.infoBis}</p>
                        <a href={"#"+el.id}>Plus d'infos</a>
                        <Modal els={el}/>
                        {/*<section className="modal" id="infos">*/}
                        {/*    <section className="modal-dialog">*/}
                        {/*        <div className="modal-content">*/}
                        {/*            <a href="/passions" className="closebtn">×</a>*/}
                        {/*            <article>1</article>*/}
                        {/*            <article>2</article>*/}
                        {/*            {el.map((els)=>{*/}
                        {/*                return <article>{els}</article>*/}
                        {/*            })}*/}
                        {/*        </div>*/}
                        {/*    </section>*/}
                        {/*</section>*/}
                        <dialog open>

                        </dialog>
                    </article>
                )
            })}
        </section>
    )
}