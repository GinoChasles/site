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

// let stock1 = []
// let stock2 = []
// let stock3= []
// let stock4= []
// let stock5= []

// data.softskills.map((el)=>(stock1.push(el.skill)))

//  for (let i = 0; i<=2;i++){
//    let skillAffiche = stock1.shift()
//    stock2.push(skillAffiche)
//    if (stock2.length === 3){
//     skillAffiche = stock1.shift()
//      stock3.push(skillAffiche)
//      skillAffiche = stock1.shift()
//      stock3.push(skillAffiche)
//    }
//    if (stock3.length === 2){
//     skillAffiche = stock1.shift()
//      stock4.push(skillAffiche)
//      skillAffiche = stock1.shift()
//      stock4.push(skillAffiche)
//    }
//    if (stock4.length === 2){
//     skillAffiche = stock1.shift()
//      stock5.push(skillAffiche)
//      skillAffiche = stock1.shift()
//      stock5.push(skillAffiche)
//    }
//   }
//   function test() {
//     for(let x=0;x<=5;x++){
//       return "stock"+x;
//     }
//   }
