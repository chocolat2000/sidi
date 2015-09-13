import flux from 'control';  
import actions from 'actions/NetworkActions';

class PartitionsStore {
  constructor() {
  	this.state = {};

  	this.bindListeners({
      updatePartition: actions.updatePartition
    });

  }
  
  updatePartition(part) {
  	let newPart = {};
  	newPart[part.id] = part;
  	this.setState(newPart);
  	//console.log('Tangibles updated !',this.state);
  }

  static getPartition(id) {
  	return this.state[id];
  }
}

export default flux.createStore(PartitionsStore);
