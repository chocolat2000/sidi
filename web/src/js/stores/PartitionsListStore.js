import flux from 'control';  
import actions from 'actions/NetworkActions';


class PartitionsListStores {
	constructor() {
		this.state = {partitions:[]};

		this.bindListeners({
			updatePartitionsList: actions.updatePartitionsList,
		});

	}

	updatePartitionsList(data) {
		this.setState({partitions:data});
		console.log('PartitionsList updated !',data);
	}


}

export default flux.createStore(PartitionsListStores);
