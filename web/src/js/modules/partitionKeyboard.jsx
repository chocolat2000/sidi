import React from 'react';

class PartitionKeyboard extends React.Component {
	constructor(props) {
		super(props);

		this.wrapperStyle = {
		    width: '40px',
		    height: '200px',
		    backgroundColor: 'grey',
		    float: 'left'
		};
	}

	render() {
		return(
			<div style={this.wrapperStyle}>
			</div>
		);
	}
}

export default PartitionKeyboard;