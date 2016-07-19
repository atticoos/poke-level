import React, {PropTypes} from 'react';
import Slider from 'react-slider';
import Handle from './handle';

export default class PokemonSlider extends React.Component {
  static propTypes = {
    pokemon: PropTypes.string,
    ...Slider.propTypes
  };
  render () {
    const {pokemon, ...props} = this.props;
    return (
      <div>
        <h4>{pokemon}</h4>
        <div className="slider-row">
          <span>0</span>
          <Slider withBars {...props}>
            <Handle value={props.value} />
          </Slider>
          <span>100</span>
        </div>
      </div>
    );
  }
}
