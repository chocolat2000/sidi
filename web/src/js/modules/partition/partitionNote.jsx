import React from 'react';
import Draggable from 'react-draggable';

class PartitionNote extends React.Component {
	constructor(props) {
		super(props);

		this.handleMove = (event,ui) => {
			this.props.changeNote({
				position: {
					x: ui.position.left,
					y: ui.position.top
				},
				length: this.props.length
			});
		}

	}

	render() {
		return (
			<Draggable bounds="parent" handle=".note" grid={[1,8]} start={this.props.position || {x: 0, y: 0}} moveOnStartChange={true} onStop={this.handleMove}>
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