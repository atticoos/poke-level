import React from 'react';
import PokeSlider from './slider';
import {EvolutionCost} from '../constants/pokemon';

const candiesNeeded = (type, count) => count * EvolutionCost[type];

export default class PokemonSliderGroup extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.type}</h3>
        <div className="group">
          <h4># of {this.props.type}</h4>
          <div>
            <PokeSlider
              value={this.props.pokemonCount}
              onChange={this.props.pokemonCountChanged}
            />
          </div>
        </div>
        <div className="group">
          <h4>{this.props.candyCount} of {candiesNeeded(this.props.type, this.props.pokemonCount)} of candies needed</h4>
          <div>
            0
            <PokeSlider
              value={this.props.candyCount}
              onChange={this.props.candyCountChanged}
              max={500}
            />
            500
          </div>
        </div>
      </div>
    )
  }
}
