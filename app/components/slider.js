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
      <div className="slider-row">
        <Slider withBars {...props}>
          <Handle value={props.value} />
        </Slider>
      </div>
    );
  }
}
