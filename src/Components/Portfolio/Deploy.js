import React from 'react'

export default function Deploy(props) {

    if(props.props == ""){
        return ""
    } else
    return (
        <button><a href={props.props.lienDeplo}>{props.nom}</a></button>
    )
}
