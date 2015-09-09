import deepstream from 'deepstream.io-client-js';

class DeepstreamConnector {

	constructor() {
		this.connect = (address) => {
			this.ds = deepstream(address).login();
			console.log(this.ds.event);
			this.ds.event.subscribe('error', (err) => {
				console.log(err);
			});
		}
	}

}

export default new DeepstreamConnector();