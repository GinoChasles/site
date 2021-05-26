import React from "react";
import data from "../data/info.json";
export default function Skill() {
  return (
    <div className="skill" >
      {data.softskills.map((el) => (
        <div key={el.id} id={el.id}>
        <ul>
          <li>{el.skill}</li>
        </ul>
        </div>
      ))}
    </div>
  );
}
