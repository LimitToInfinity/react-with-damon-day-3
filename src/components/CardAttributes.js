import React from "react";

export default function CardAttributes(props) {

    const { character } = props

    return (
        <div className="card-attributes">
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
}