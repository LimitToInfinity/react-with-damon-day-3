import React, { Component } from "react";
import CardContainer from "./CardContainer";
import ActiveCard from "./ActiveCard"

export default class MainContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            character : {}
        }
    }

    changeActiveCard = (character) => {
        this.setState({ character, })
    }

    render(){

        const { character } = this.state

        return(
            <div className="main-container">
                <CardContainer characters={ this.props.characters } changeActiveCard={ this.changeActiveCard } />
                {character.id
                    ? <ActiveCard character={ character } />
                    : "Pick A Card!"
                }
            </div>
        );
    }
}