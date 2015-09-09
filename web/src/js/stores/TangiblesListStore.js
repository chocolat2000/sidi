import flux from 'control';  
import actions from 'actions/NetworkActions';


class TangiblesListStores {
	constructor() {
		this.state = {tangibles:[]};

		this.bindListeners({
			updateTangiblesList: actions.updateTangiblesList,
		});

	}

	updateTangiblesList(data) {
		this.setState({tangibles:data});
		console.log('TangiblesList updated !',data);
	}


}

export default flux.createStore(TangiblesListStores);
