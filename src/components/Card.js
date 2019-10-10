import React, { Component } from "react";
import CardAttributes from "./CardAttributes";


export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAttributes: false,
        }
    }

    handleClick = (character) => {
        this.setState({ showAttributes: !this.state.showAttributes, })
        
        this.props.changeActiveCard(character)
    }

    displayStuff = () => {
        return (<CardAttributes character={this.props.character} />)
    }

    doTheOtherThing = () => {
        return (this.state.showAttributes ? <CardAttributes character={this.props.character} /> : "Click Me")
    }

    render() {

        const { character } = this.props

        return (
            <div className="card" onClick={() => this.props.id ? null : this.handleClick(character)}>
                {this.props.id ? <h2>Active Card</h2> : null}
                <h3>{character.name}</h3>
                <img alt="Card Image" src={character.image} />
                {this.props.id
                    ? this.displayStuff()
                    : this.doTheOtherThing()
                }
            </div>
        );
    }
}