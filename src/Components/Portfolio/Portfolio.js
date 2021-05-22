import React from 'react'
import data from "../../data/info.json"
import Profil from "../CV/Profil"
import Competence from "../CV/Competence";
import Card from "./Card";
export default function Portfolio() {
    return (
        <section>
            <Profil/>
            <Competence/>
            <Card repos={data.github}/>
        </section>
    )
}
