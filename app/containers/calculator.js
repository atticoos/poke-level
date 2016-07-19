import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ExperiencePointsActions from '../actions/experiencePoints';
import * as PercentageActions from '../actions/percentages';
import PokeSlider from '../components/slider';
import {Pokemon} from '../constants/pokemon';
import Handle from '../components/handle';
import XPInputs from '../components/inputs';
import selector from '../selectors/calculator';

class Calculator extends React.Component {
  render() {
    console.log('percentages', this.props.percentages)
    return (
      <div>
        <XPInputs
          currentXP={this.props.currentXP}
          targetXP={this.props.targetXP}
          onCurrentXPChanged={event => this.props.actions.xp.currentXPChanged(event.target.value)}
          onTargetXPChanged={event => this.props.actions.xp.targetXPChanged(event.target.value)}
        />

      <br/>
      <label><input type="checkbox" />
      Double XP
      </label>

      <br/><br/>


      <h2>Remaining Catches</h2>
      {Object.keys(this.props.percentages).map(type => (
        <PokeSlider
          key={`slider_${type}`}
          pokemon={type}
          value={this.props.percentages[type]}
          onChange={percentage => this.props.actions.percentages.pokemonPercentageChanged(type, percentage)}
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
    percentages: bindActionCreators(PercentageActions, dispatch)
  }
});

export default connect(selector, actions)(Calculator);
