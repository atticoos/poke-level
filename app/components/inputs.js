import React from 'react';

export default class Inputs extends React.Component {
  render() {
    return (
      <div className="inputs">
        <input
          type="text"
          value={this.props.currentXP}
          onChange={this.props.onCurrentXPChanged}
        />
        <input
          type="text"
          value={this.props.targetXP}
          onChange={this.props.onTargetXPChanged}
        />
      </div>
    )
  }
}
