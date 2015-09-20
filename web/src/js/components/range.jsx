import React from 'react';
import ReactSlider from './react-slider';

class Range extends React.Component {
	constructor(props) {
		super(props);

	}

/*
	componentDidUpdate(prevProps, prevState) {
		//console.log('set_value');
		this.elem.foundation('slider', 'set_value', this.props.value);

	}
*/

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.value !== this.props.value;
	}


	render() {
		return (
			<ReactSlider
				orientation={this.props.horizontal ? "horizontal" : "vertical"}
				className={this.props.horizontal ? "horizontal-slider" : "vertical-slider"}
				min={0}
				max={255}
				value={this.props.value} onChange={this.props.onChange} />
			);
	}

}

Range.propTypes = {
	value: React.PropTypes.number,
	horizontal: React.PropTypes.bool,
	onChange: React.PropTypes.func.isRequired
};

export default Range;  
