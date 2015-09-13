import React from 'react';
import {Navbar, Nav, MenuItem, NavDropdown} from 'react-bootstrap';

class Navigator extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Navbar brand="My Site">
			<Nav>
				<NavDropdown eventKey={3} title="Add" id="basic-nav-dropdown">
					<MenuItem eventKey="1" onSelect={() => {this.props.addServerTangible('sid');}}>Sid</MenuItem>
					<MenuItem eventKey="2" onSelect={() => {this.props.addServerPartition();}}>Partition</MenuItem>
				</NavDropdown>
			</Nav>
			</Navbar>
			);
	}
}


export default Navigator;