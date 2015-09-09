import flux from 'control';

import deepstream from 'deepstreamConnector';
//import uuid from 'uuid';

class NetworkActions {  
	constructor() {
		this.generateActions('updateTangiblesList', 'updateTangible');

	}

	connectDeepStream(address) {
		deepstream.connect(address);
		
		deepstream.tangibles = deepstream.ds.record.getList('tangiblesList');

		let tangRecords = [];

		this.dispatch(address);

		deepstream.tangibles.subscribe(data => {
			//console.log('list updated : ');
			//console.log(data);
			//deepstream.tangibles.setEntries([]);
			//tangRecords.forEach((tang) => {tang.discard();});
			tangRecords = data.map((tang) => {
				let tangRecord = deepstream.ds.record.getRecord(tang);
				tangRecord.subscribe(data => {
					this.actions.updateTangible(data);
				}, true);
				return tangRecord;
			});

			this.actions.updateTangiblesList(data.map((tang) => {return tang.slice('tangibles/'.length);}));
		}, true);

		//this.dispatch();

	}

	addServerTangible(type) {
		if(deepstream.tangibles) {
			let newId = deepstream.ds.getUid();
			let newTangible = deepstream.ds.record.getRecord('tangibles/'+newId);
			
			newTangible.set({id:newId,type:type});

			console.log('add tangible ' + type);

			deepstream.tangibles.whenReady(() => {
				deepstream.tangibles.addEntry('tangibles/'+newId);
			});
		}
	}

	removeServerTangible(id) {
		if(deepstream.tangibles) {
			console.log('remove tangible id ' + id);
			deepstream.tangibles.whenReady(() => {
				deepstream.tangibles.removeEntry('tangibles/'+id);
			});
			deepstream.ds
						.record
						.getRecord('tangibles/'+id).delete();
		}
	}

	updateServerTangible(newVal) {
		if(deepstream.ds) {
			if( newVal.hasOwnProperty('id') &&
				newVal.hasOwnProperty('component') &&
				newVal.hasOwnProperty('value')) {

				deepstream.ds
						.record
						.getRecord('tangibles/'+newVal.id)
						.set(newVal.component,newVal.value);
			}
		} else {
			throw "Not connected to deepstream !";
		}
	}

}

export default flux.createActions(NetworkActions);  
