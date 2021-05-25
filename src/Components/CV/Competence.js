import React from "react";
import data from "../../data/info.json";
import "../CSS/Competence.css"

export default function Competence() {
  return (
    <section className="blockCompetence">
      {data.competences.map((el) => {
        let starLvl = [];
        for (let i = 0; i < el.niveau; i++) {
          starLvl.push("★");
        }
        for (let i = el.niveau; i < 5; i++) {
          starLvl.push("☆");
        }
        return (
          <article key={el.name} className="competence" id={el.name}>
            <figure>
              <img src={el.image} alt={"logo de la technologie " + el.name} width="64px" />
            <figcaption title={el.niveau + " étoiles sur 5"}>{starLvl}</figcaption>
            </figure>
          </article>
        );
      })}
    </section>
  )
}
