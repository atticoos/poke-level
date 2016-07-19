import React from 'react';
import PokeSlider from './slider';

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
          <h4># of {this.props.type} candies</h4>
          <div>
            0
            <PokeSlider
              value={this.props.candyCount}
              onChange={this.props.candyCountChanged}
            />
            100
          </div>
        </div>
      </div>
    )
  }
}
