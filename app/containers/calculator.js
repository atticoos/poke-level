import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ExperiencePointsActions from '../actions/experiencePoints';
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
      <span>needed: {this.props.pidgies}</span>
      </div>
    );
  }
}

const actions = dispatch => ({
  xpActions: bindActionCreators(ExperiencePointsActions, dispatch)
});

export default connect(selector, actions)(Calculator);
