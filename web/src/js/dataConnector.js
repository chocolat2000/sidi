import store from 'stores/TangiblesStore';
import deepstream from 'deepstreamConnector';

import {updateTangiblesList, updateTangible, updatePartitionsList, updatePartition} from 'actions/NetworkActions';


class Connector {
	constructor(store) {
		//this.store = store;
		deepstream.connect('localhost:6020');

		deepstream.tangibles = deepstream.ds.record.getList('tangiblesList');
		deepstream.partitions = deepstream.ds.record.getList('partitionsList');

		let tangRecords = [];
		let partRecords = [];

		deepstream.tangibles.subscribe((data) => {
			tangRecords = data.map((tang) => {
				let tangRecord = deepstream.ds.record.getRecord(tang);
				tangRecord.subscribe(data => {
					this.dispatch.updateTangible(data);
				}, true);
				return tangRecord;
			});

			store.dispatch.updateTangiblesList(data.map((tang) => {return tang.slice('tangibles/'.length);}));
		}, true);
	}
}

export default Connector;