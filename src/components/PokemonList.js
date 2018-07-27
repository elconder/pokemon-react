import React, { Component } from 'react';
import './styles.css';

class PokemonList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: null
        }
    }

    renderPokemons() {
        const { pokemons, handleClickPokemon } = this.props;

        return (
            pokemons.list.map(pokemon => {
                return (
                    <div
                        onClick={() => handleClickPokemon(pokemon)}
                        className="pokemon"
                        key={pokemon.id}>
                        {pokemon.name}
                    </div>
                )
            }));
    }

    render() {
        return (
            <div className="pokemon-list">
                {this.renderPokemons()}
            </div>
        );
    }
}

export default PokemonList;