import React from 'react'
import Deploy from "./Deploy";
export default function Card(props) {
    return (
        <section>
            {props.repos.map((el)=>{
                return (
                <article id={el.id}>
                    <Deploy props={el.lienDeplo} nom="Déploiement"/>
                    <Deploy props={el.lienRepo} nom="Github"/>
                </article>
                )})}
        </section>
    )
}