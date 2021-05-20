import React from 'react'
import data from "../data/info.json"
import './CSS/Profil.css'

export default function Profil() {
    return (
       <>
        <div id="profil">
            <img id="photo" src={data.profil.photo} alt="profil"/>
                <ul id="identite">
                    <li>{data.profil.metier}</li>
                    <li>{data.profil.prenom} {data.profil.nom}</li>
                </ul>

                <ul id="contact">
                    <li>{data.profil.adresse.numero} {data.profil.adresse.rue}</li>
                    <li>{data.profil.adresse.codePostale} {data.profil.adresse.ville}</li>
                   <a href={data.profil.mail}><li>gino.chasles@gmail.com</li></a>
                   <a href={data.profil.linkedin}><li>linkedin</li></a><a href={data.profil.github}><li>github</li></a>
                    <a href={process.env.PUBLIC_URL + "CV_Chasles_Gino.pdf"} download>Télécharger mon CV</a>
                </ul>
                    <p id="description">{data.profil.description}</p>

        </div>
            <hr></hr>
    </>
    )
}

