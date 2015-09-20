import flux from 'control';

import deepstream from 'deepstreamConnector';
//import uuid from 'uuid';

class NetworkActions {  
	constructor() {
		this.generateActions('updateTangiblesList', 'updateTangible', 'updatePartitionsList', 'updatePartition');

	}

	connectDeepStream(address) {
		deepstream.connect(address);
		
		deepstream.tangibles = deepstream.ds.record.getList('tangiblesList');
		deepstream.partitions = deepstream.ds.record.getList('partitionsList');

		let tangRecords = [];
		let partRecords = [];

		this.dispatch(address);

		deepstream.tangibles.subscribe((data) => {
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

		deepstream.partitions.subscribe((data) => {
			//console.log('list updated : ');
			//console.log(data);
			//deepstream.tangibles.setEntries([]);
			//tangRecords.forEach((tang) => {tang.discard();});
			partRecords = data.map((part) => {
				let partRecord = deepstream.ds.record.getRecord(part);
				partRecord.subscribe(data => {
					this.actions.updatePartition(data);
				}, true);
				return partRecord;
			});

			this.actions.updatePartitionsList(data.map((tang) => {return tang.slice('partitions/'.length);}));
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

	addServerPartition() {
		if(deepstream.partitions) {
			let newId = deepstream.ds.getUid();
			let newPartition = deepstream.ds.record.getRecord('partitions/'+newId);
			
			newPartition.set({id:newId});

			console.log('add parition');

			deepstream.partitions.whenReady(() => {
				deepstream.partitions.addEntry('partitions/'+newId);
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

	removeServerParition(id) {
		if(deepstream.partitions) {
			console.log('remove tangible id ' + id);
			deepstream.partitions.whenReady(() => {
				deepstream.partitions.removeEntry('partitions/'+id);
			});
			deepstream.ds
						.record
						.getRecord('partitions/'+id).delete();
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

	updateServerPartition(newVal) {
		if(deepstream.ds) {
			if( newVal.hasOwnProperty('id') &&
				newVal.hasOwnProperty('component') &&
				newVal.hasOwnProperty('value')) {

				deepstream.ds
						.record
						.getRecord('partitions/'+newVal.id)
						.set(newVal.component,newVal.value);
			}
		} else {
			throw "Not connected to deepstream !";
		}
	}


}

export default flux.createActions(NetworkActions);  
