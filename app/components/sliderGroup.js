import React from 'react';
import PokeSlider from './slider';
import {EvolutionCost} from '../constants/pokemon';

const candiesNeeded = (type, count) => count * EvolutionCost[type];
const catchesNeeded = (type, caught, candies) => Math.abs(Math.min(0, Math.floor((candies - (caught * EvolutionCost[type])) / EvolutionCost[type])));

export default class PokemonSliderGroup extends React.Component {
  render() {
    const {
      pokemonCount,
      candyCount,
      type
    } = this.props;
    return (
      <div>
        <h3>{type}</h3>
        <div className="group">
          <h4># of {type}</h4>
          <div>
            <PokeSlider
              value={pokemonCount}
              onChange={this.props.pokemonCountChanged}
            />
          </div>
        </div>
        <div className="group">
          <h4>{this.props.candyCount} of {candiesNeeded(type, pokemonCount)} of candies needed</h4>
          <p>(catch {catchesNeeded(type, pokemonCount, candyCount)} more!)</p>
          <div>
            0
            <PokeSlider
              value={candyCount}
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
