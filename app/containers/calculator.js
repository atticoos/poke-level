import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Pokemon} from '../constants/pokemon';
import * as ExperiencePointsActions from '../actions/experiencePoints';
import * as PokemonActions from '../actions/pokemon';
import SliderGroup from '../components/sliderGroup';
import Totals from '../components/totals';
import XPInputs from '../components/inputs';
import selector from '../selectors/calculator';

class Calculator extends React.Component {
  render() {
    console.log(this.props.grossEvolveXP)
    return (
      <div>
        <XPInputs
          currentXP={this.props.currentXP}
          targetXP={this.props.targetXP}
          onCurrentXPChanged={event => this.props.actions.xp.currentXPChanged(event.target.value)}
          onTargetXPChanged={event => this.props.actions.xp.targetXPChanged(event.target.value)}
        />
      <Totals
        gross={this.props.grossEvolveXP}
      />

      <br/>
      <label><input type="checkbox" />
      Double XP
      </label>

      <br/><br/>


      <h2>Remaining Catches</h2>
      {Object.keys(Pokemon).map(type => (
        <SliderGroup
          key={`slider_${type}`}
          type={type}
          pokemonCount={this.props.totals.pokemon[type]}
          candyCount={this.props.totals.candy[type]}
          pokemonCountChanged={count => this.props.actions.pokemon.pokemonCountChanged(type, count)}
          candyCountChanged={count => this.props.actions.pokemon.candyCountChanged(type, count)}
        />
      ))}


      <br/>
      <br/><br/>
      <span>needed: {this.props.pidgies}</span>
      </div>
    );
  }
}

const actions = dispatch => ({
  actions: {
    xp: bindActionCreators(ExperiencePointsActions, dispatch),
    pokemon: bindActionCreators(PokemonActions, dispatch)
  }
});

export default connect(selector, actions)(Calculator);
