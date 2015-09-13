import React from 'react';
import Draggable from 'react-draggable';

class PartitionNote extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Draggable bounds="parent" handle=".note" grid={[1,8]} start={this.props.start || {x: 0, y: 0}} moveOnStartChange={true}>
				<div className="note">
					<Draggable axis="x" bounds={{left:0}} zIndex={100}>
						<div className="handler" />
					</Draggable>
				</div>
			</Draggable>
		);
	}
}

export default PartitionNote;