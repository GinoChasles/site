import React from 'react'

export default function Link(props) {

    if(props.props === ""){
        return null
    } else
    return (
        <button className="button-link"><a  href={props.props} target="_blank" rel="noreferrer" >{props.nom}</a></button>
    )
}
