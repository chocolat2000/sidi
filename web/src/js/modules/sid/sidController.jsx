import React from 'react';
import AltContainer from 'alt/AltContainer';
import shallowEqual from 'react/lib/shallowEqual';

//import connectToStores from 'alt/utils/connectToStores';  
import TangiblesStore from 'stores/TangiblesStore';
import Range from 'components/range';
import SidActions from './sidActions';

import {Grid, Row, Col, Button, Tabs, Tab, Input} from 'react-bootstrap';

class SidController extends React.Component {

	constructor(props) {
    	super(props);

		this.updateServer = (component,value) => {
			props.updateServerTangible({
				id:this.props.tangibleId,
				component: component,
				value: value
			});
		};
	}

/*
  static getStores(props) {
    return [TangiblesStore];
  }

  static getPropsFromStores(props) {
    return TangiblesStore.getTangible(props.tangibleId) || {};
  }
*/


	shouldComponentUpdate(nextProps, nextState) {
		return this.props.tangibleId !== nextProps.tangibleId;
	}


	render() {
		return (
			<AltContainer
				store={
					(props) => {
						return {
							store: TangiblesStore,
							value: TangiblesStore.getTangible(this.props.tangibleId)
						};
					}
				}

				shouldComponentUpdate={
					(nextProps) => {
						return 	!shallowEqual(TangiblesStore.getTangible(this.props.tangibleId), nextProps);
					}
				}

				render={
					(props) => {
						return (
							<Grid>
							<Row>
								<Col sm={3} md={2} lg={2}>
									<Button className="close" bsStyle="link" onClick={this.props.removeServerTangible}>x</Button><h3>Sid Patch</h3>
								</Col>
								<Col sm={9} md={10} lg={10}>
									<Input type="text" value={props.name} onChange={(event) => {this.updateServer('name',event.target.value);}} />
								</Col>
							</Row>
							<Row>
								<Col md={1} lg={1}>
									<Range value={props.freq} name={"freq-"+this.props.tangibleId} onChange={(value) => {this.updateServer("freq",value);}} />
								</Col>
								<Col md={1} lg={1}>
									<Range value={props.cutOffFreq} name={"cutOffFreq-"+this.props.tangibleId} onChange={(value) => {this.updateServer("cutOffFreq",value);}} />
								</Col>
								<Col md={10} lg={10}>
									<Tabs defaultActiveKey={1}>
										<Tab eventKey={1} title="OSC1">
											<Row>
												<Col sm={4}>
													<Input type="radio" label="Noise" name={"osc1wave-"+this.props.tangibleId} checked={props.osc1wave === "noise"} value="noise" onChange={(event) => {this.updateServer('osc1wave','noise');}} />
													<Input type="radio" label="Square" name={"osc1wave-"+this.props.tangibleId} checked={props.osc1wave === "square"} value="square" onChange={(event) => {this.updateServer('osc1wave','square');}} />
													<Input type="radio" label="Sawtooth" name={"osc1wave-"+this.props.tangibleId} checked={props.osc1wave === "sawtooth"} value="sawtooth" onChange={(event) => {this.updateServer('osc1wave','sawtooth');}} />
													<Input type="radio" label="Triangle" name={"osc1wave-"+this.props.tangibleId} checked={props.osc1wave === "triangle"} value="triangle" onChange={(event) => {this.updateServer('osc1wave','triangle');}} />
												</Col>
												<Col sm={4}>
						 							<h5>Pulse width</h5>
													<Range value={props.osc1pulse} horizontal={true} name={"osc1pulse-"+this.props.tangibleId} onChange={(value) => {this.updateServer("osc1pulse",value);}} />
												</Col>
												<Col sm={4}>
												</Col>
											</Row>
										</Tab>
										<Tab eventKey={2} title="OSC2">
											<Row>
												<Col sm={4}>
													<Input type="radio" label="Noise" name={"osc2wave-"+this.props.tangibleId} checked={props.osc2wave === "noise"} value="noise" onChange={(event) => {this.updateServer('osc2wave','noise');}} />
													<Input type="radio" label="Square" name={"osc2wave-"+this.props.tangibleId} checked={props.osc2wave === "square"} value="square" onChange={(event) => {this.updateServer('osc2wave','square');}} />
													<Input type="radio" label="Sawtooth" name={"osc2wave-"+this.props.tangibleId} checked={props.osc2wave === "sawtooth"} value="sawtooth" onChange={(event) => {this.updateServer('osc2wave','sawtooth');}} />
													<Input type="radio" label="Triangle" name={"osc2wave-"+this.props.tangibleId} checked={props.osc2wave === "triangle"} value="triangle" onChange={(event) => {this.updateServer('osc2wave','triangle');}} />
												</Col>
												<Col sm={4}>
						 							<h5>Pulse width</h5>
													<Range value={props.osc2pulse} horizontal={true} name={"osc2pulse-"+this.props.tangibleId} onChange={(value) => {this.updateServer("osc2pulse",value);}} />
												</Col>
												<Col sm={4}>
												</Col>

											</Row>
										</Tab>
										<Tab eventKey={3} title="OSC3">
											<Row>
												<Col sm={4}>
													<Input type="radio" label="Noise" name={"osc3wave-"+this.props.tangibleId} checked={props.osc3wave === "noise"} value="noise" onChange={(event) => {this.updateServer('osc3wave','noise');}} />
													<Input type="radio" label="Square" name={"osc3wave-"+this.props.tangibleId} checked={props.osc3wave === "square"} value="square" onChange={(event) => {this.updateServer('osc3wave','square');}} />
													<Input type="radio" label="Sawtooth" name={"osc3wave-"+this.props.tangibleId} checked={props.osc3wave === "sawtooth"} value="sawtooth" onChange={(event) => {this.updateServer('osc3wave','sawtooth');}} />
													<Input type="radio" label="Triangle" name={"osc3wave-"+this.props.tangibleId} checked={props.osc3wave === "triangle"} value="triangle" onChange={(event) => {this.updateServer('osc3wave','triangle');}} />
												</Col>
												<Col sm={4}>
						 							<h5>Pulse width</h5>
													<Range value={props.osc3pulse} horizontal={true} name={"osc3pulse-"+this.props.tangibleId} onChange={(value) => {this.updateServer("osc3pulse",value);}} />
												</Col>
												<Col sm={4}>
												</Col>
											</Row>
										</Tab>
										<Tab eventKey={4} title="ADSR">
										</Tab>
									</Tabs>
								</Col>
							</Row>
							<Row>
								<Col md={1} lg={1}>
									<h5>Freq</h5>
								</Col>
								<Col md={11} lg={11}>
									<h5>Cutoff</h5>
								</Col>
							</Row>

							</Grid>
							);
					}
				}
			/ >
			);
	}
}

export default SidController;
//export default connectToStores(SidController);  
