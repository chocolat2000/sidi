import {createAction} from 'redux-actions';
import deepstream from 'deepstream.io-client-js';

export const updateTangiblesList = createAction('UPDATE_TANGIBLES_LIST');
export const updateTangible = createAction('UPDATE_TANGIBLE');
export const updatePartitionsList = createAction('UPDATE_PARTITIONS_LIST');
export const updatePartition = createAction('UPDATE_PARTITION');


let ds = deepstream('localhost:6020').login(); 
let tangibles = ds.record.getList('tangiblesList');
let partitions = ds.record.getList('partitionsList');
let tangRecords = [];
let partRecords = [];

export const registerTangibles = () =>
	(dispatch, getState) => {
		tangibles.subscribe((data) => {
			//console.log('list updated : ');
			//console.log(data);
			//deepstream.tangibles.setEntries([]);
			//tangRecords.forEach((tang) => {tang.discard();});
			tangRecords = data.map((tang) => {
				let tangRecord = ds.record.getRecord(tang);
				tangRecord.subscribe(data => {
					dispatch(updateTangible(data));
				}, true);
				return tangRecord;
			});

			dispatch(updateTangiblesList());
		}, true);
	}


export const registerPartitions = () =>
	(dispatch, getState) => {
		partitions.subscribe((data) => {
			//console.log('list updated : ');
			//console.log(data);
			//deepstream.tangibles.setEntries([]);
			//tangRecords.forEach((tang) => {tang.discard();});
			partRecords = data.map((part) => {
				let partRecord = ds.record.getRecord(part);
				partRecord.subscribe(data => {
					dispatch(updatePartition(data));
				}, true);
				return partRecord;
			});

			dispatch(updatePartitionsList());
		}, true);
	}


export const serverTangibleAdded = createAction('SERVER_TANGIBLE_ADDED');

export const addServerTangible = (type) =>
	(dispatch, getState) => {
		if(tangibles) {
			let newId = ds.getUid();
			let newTangible = ds.record.getRecord('tangibles/'+newId);
			
			newTangible.set({id:newId,type:type});

			tangibles.whenReady(() => {
				tangibles.addEntry('tangibles/'+newId);
				dispatch(serverTangibleAdded());
			});
		}

	}

export const serverTangibleUpdated = createAction('SERVER_TANGIBLE_UPDATED');

export const updateServerTangible = (newVal) =>
	(dispatch, getState) => {
		if( newVal.hasOwnProperty('id') &&
			newVal.hasOwnProperty('component') &&
			newVal.hasOwnProperty('value')) {

			ds.record
				.getRecord('tangibles/'+newVal.id)
				.set(newVal.component,newVal.value);

			dispatch(serverTangibleUpdated());
		}
	}


export const serverPartitionAdded = createAction('SERVER_PARTITION_ADDED');

export const addServerPartition = (type) =>
	(dispatch, getState) => {
		if(partitions) {
			let newId = ds.getUid();
			let newPartitions = ds.record.getRecord('partitions/'+newId);
			
			newPartitions.set({id:newId,type:type});

			partitions.whenReady(() => {
				partitions.addEntry('partitions/'+newId);
				dispatch(serverPartitionAdded());
			});
		}

	}

export const serverPartitionUpdated = createAction('SERVER_PARITION_UPDATED');

export const updateServerPartition = (newVal) =>
	(dispatch, getState) => {
		if( newVal.hasOwnProperty('id') &&
			newVal.hasOwnProperty('component') &&
			newVal.hasOwnProperty('value')) {

			ds.record
				.getRecord('partitions/'+newVal.id)
				.set(newVal.component,newVal.value);

			dispatch(serverPartitionUpdated());
		}
	}
