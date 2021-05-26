import React from "react";

export default class Galerie extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <article>
                {this.props.passion.images.map((el)=>{
                   return (
                    <figure>
                        <img src={el} alt="dessin" width="64px" height="64px"/>
                    </figure>
                   )})}
            </article>
        )
    }
}