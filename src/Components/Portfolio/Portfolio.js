import React from 'react'
import data from "../../data/info.json"
import Profil from "../CV/Profil"
import Competence from "../CV/Competence";
import Card from "./Card";
import "../CSS/Portfolio.css"
export default function Portfolio() {
    return (
        <section id="portfolio">
            <Profil/>
            <Competence/>
            <Card repos={data.github}/>
        </section>
    )
}
