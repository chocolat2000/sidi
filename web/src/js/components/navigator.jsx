import React from 'react';
import {Navbar, Nav, MenuItem, NavDropdown} from 'react-bootstrap';

class Navigator extends React.Component {
	constructor(props) {
		super(props);

		this.addTangible = (type) => {
			this.props.addServerTangible(type);
		}

	}

	render() {
		return (
			<Navbar brand="My Site">
			<Nav>
				<NavDropdown eventKey={3} title="Add" id="basic-nav-dropdown">
					<MenuItem eventKey="1" onSelect={() => {this.addTangible('sid');}}>Sid</MenuItem>
				</NavDropdown>
			</Nav>
			</Navbar>
			);
	}
}


export default Navigator;