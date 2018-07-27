import React, { Component } from 'react';

class PokemonItemDetails extends Component {

    constructor(props) {
        super(props);
    }

    showPokemonDetails() {
        return this.props.pokemon ? <div>Pokemon {this.props.pokemon.name}</div> : <div>Seleccione un pokemon</div>;
    }

    render() {
        return (
            <div>
                {this.showPokemonDetails()}
            </div>
        );
    }
}

export default PokemonItemDetails;