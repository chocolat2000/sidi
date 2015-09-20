import React from 'react';
import Draggable from 'react-draggable';

import uuid from 'uuid';

import PartitionKeyboard from './partitionKeyboard';
import PartitionNote from './partitionNote';
import PartitionTimeBar from './partitionTimeBar';

import {ButtonToolbar,Button} from 'react-bootstrap';

require('./partition.scss');


class Partition extends React.Component {
	constructor(props) {
		super(props);


		this.addNote = () => {
			let notes = this.props.notes ? JSON.parse(JSON.stringify(this.props.notes)) : {};
			notes[uuid.v4()] = {
				position: {
					x: 0,
					y: 0
				},
				length: 10
			};

			this.props.updateServerPartition({
				id: this.props.paritionId,
				component: 'notes',
				value: notes
			});
		}

		this.changeNote = (noteId, note) => {
			let notes = this.props.notes ? JSON.parse(JSON.stringify(this.props.notes)) : {};
			notes[noteId] = note;

			this.props.updateServerPartition({
				id: this.props.paritionId,
				component: 'notes',
				value: notes
			});
		}
	}

	render() {
		return(
			<div className="container">
	            <ButtonToolbar>
	                <Button bsSize="xsmall" onClick={this.addNote}>Add note</Button>
                </ButtonToolbar>
                <div className="partition">
				<PartitionKeyboard />
				<div className="content">
					<PartitionTimeBar />
					{(() => {
						let notes = [];
						for (let noteId in this.props.notes) {
							notes.push(<PartitionNote key={noteId} {...this.props.notes[noteId]} changeNote={(note) => {this.changeNote(noteId,note);}} />);
						}
						return notes;
					})()}
				</div>
				</div>
			</div>
			);
	}
}


export default Partition;