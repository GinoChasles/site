import React from 'react'
import data from "../../data/info.json"
import "../CSS/Profil.css"
export default function Profil() {
    return (
       <>
        <article id="profil">
            <img id="photo" src={data.profil.photo} alt="profil"/>
                <ul id="identite">
                    <li>{data.profil.metier}</li>
                    <li>{data.profil.prenom} {data.profil.nom}</li>
                </ul>

                <ul id="contact">
                    <li>{data.profil.adresse.numero} {data.profil.adresse.rue} {data.profil.adresse.codePostale} {data.profil.adresse.ville}</li>
                   <a href={data.profil.mail}><li>gino.chasles@gmail.com</li></a>
                    <li><a href={data.profil.linkedin}>linkedin</a>                   <a href={process.env.PUBLIC_URL + "CV_Chasles_Gino.pdf"} download>Télécharger mon CV</a></li>
                </ul>
                    <p id="description">{data.profil.description}</p>

        </article>
            <hr></hr>
    </>
    )
}

