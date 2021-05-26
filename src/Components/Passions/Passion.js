import React from "react";
import data from "../../data/info.json"
import Modal from "./Modal";

export default function Passion() {
    return (
        <section id="passion">
            {data.passions.map((el) => {
                return (
                    <article key={el.id} >
                        <div className="passion-card">
                        <h2>{el.name}</h2>
                        <p>{el.info}</p>
                        <a href={"#"+el.id} >Plus d'infos</a>
                        </div>

                        <Modal els={el}/>
                    </article>
                )
            })}
        </section>
    )
}