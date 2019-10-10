import React from "react";
import Card from "./Card";


export default function CardContainer(props) {
    
    const characters = props.characters.map(character => {
        return (<Card key={ character.id } changeActiveCard={ props.changeActiveCard } character={ character } />);
    });

    // showSkill() {

    // }
    
    return (
        <div className="card-container">
            { characters }
        </div>
    );
}