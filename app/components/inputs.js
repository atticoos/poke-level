import React from 'react';

export default class Inputs extends React.Component {
  render() {
    return (
      <div className="inputs">
        <div>
          <h3>Current XP</h3>
          <input
            type="number"
            value={this.props.currentXP}
            onChange={this.props.onCurrentXPChanged}
          />
        </div>
        <div>
          <h3>Target XP</h3>
          <input
            type="number"
            value={this.props.targetXP}
            onChange={this.props.onTargetXPChanged}
          />
        </div>
      </div>
    )
  }
}
