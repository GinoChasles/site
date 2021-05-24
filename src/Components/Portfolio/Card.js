import React from 'react'
import Link from "./Link";
export default function Card(props) {
    return (
        <section id="portfolio-card">
            {props.repos.map((el)=>{
                return (
                <article key={el.id} className="portfolio-card-article">
                    {notimg(el.img)}
                    <Link props={el.lienRepo} nom="Github"/>
                    <Link props={el.lienDeplo} nom="Déploiement"/>
                    <p>{el.description}</p>
                </article>
                )})}
        </section>
    )
    function notimg(url)  {
        if (url === ""){
            return <img className="portfolio-card-img" src="https://www.webmarketing-com.com/wp-content/uploads/2015/09/creation-site.jpg" height="250px"  alt="associée au projet"/>
        }
        else return <img className="portfolio-card-img" src={url} height="250px"  alt="associée au projet"/>
    }
}