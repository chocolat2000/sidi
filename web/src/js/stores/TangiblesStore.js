import flux from 'control';  
import actions from 'actions/NetworkActions';

class TangiblesStore {
  constructor() {
  	this.state = {};

  	this.bindListeners({
      updateTangible: actions.updateTangible
    });

  }
  
  updateTangible(tang) {
  	let newTang = {};
  	newTang[tang.id] = tang;
  	this.setState(newTang);
  	//console.log('Tangibles updated !',this.state);
  }

  static getTangible(id) {
  	return this.state[id];
  }
}

export default flux.createStore(TangiblesStore);
