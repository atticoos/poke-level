import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ExperiencePointsActions from '../actions/experiencePoints';
import Slider from 'react-slider';
import Handle from '../components/handle';
import XPInputs from '../components/inputs';
import selector from '../selectors/calculator';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <XPInputs
          currentXP={this.props.currentXP}
          targetXP={this.props.targetXP}
          onCurrentXPChanged={event => this.props.xpActions.currentXPChanged(event.target.value)}
          onTargetXPChanged={event => this.props.xpActions.targetXPChanged(event.target.value)}
        />

      <br/>
      <label><input type="checkbox" />
      Double XP
      </label>

<br/><br/>
<h2>Remaining Catches</h2>
      <Slider withBars>
        <Handle pokemon="Pidgy" />
        <Handle pokemon="Weedle" />
        <Handle pokemon="Caterpie" />
        <Handle pokemon="Rattata" />
        <Handle pokemon="Eevee" />
        <Handle pokemon="Zubat" />
      </Slider>
      <br/>
      <br/><br/>
      <span>needed: {this.props.pidgies}</span>
      </div>
    );
  }
}

const actions = dispatch => ({
  xpActions: bindActionCreators(ExperiencePointsActions, dispatch)
});

export default connect(selector, actions)(Calculator);
