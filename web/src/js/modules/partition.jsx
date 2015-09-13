import React from 'react';
import Draggable from 'react-draggable';

import PartitionKeyboard from './partitionKeyboard';
import PartitionNote from './partitionNote';


class Partition extends React.Component {

	render() {
		return(
			<div className="partition clearfix">
				<PartitionKeyboard />
				<div className="content">
					<PartitionNote />
				</div>
			</div>
		);
	}
}


export default Partition;