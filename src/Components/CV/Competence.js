import React from "react";
import data from "../../data/info.json";
import './CSS/Competence.css'

export default function Competence() {
  return (
    <div className="blockCompetence">
      {data.competences.map((el) => {
        let starLvl = [];
        for (let i = 0; i < el.niveau; i++) {
          starLvl.push("★");
        }
        for (let i = el.niveau; i < 5; i++) {
          starLvl.push("☆");
        }
        return (
          <div key={el.name} className="competence" id={el.name}>
            <div>
              <img src={el.image} alt="logo de la compétence" width="64px" />
            </div>
            <div>{starLvl}</div>
          </div>
        );
      })}
    </div>
  );
}
