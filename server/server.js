import deepstream from 'deepstream.io-client-js';

let ds = deepstream('localhost:6021').login();

let notesId = [];
let notesRec = ds.record.getRecord('notes');
notesRec.subscribe((data) => {
	notesId.forEach((id) => {clearTimeout(id);});
	notesId = data.list.map((step) => {
		return setTimeout(() => {
			console.log(step.type);
		}, step.time);

	});
});

let notes = [
	{
		type: 'noteOn',
		time: 1000
	},
	{
		type: 'noteOff',
		time: 1050
	},
	{
		type: 'noteOn',
		time: 2500
	},
	{
		type: 'noteOff',
		time: 2550
	}
];


/*
(function run() {

	let notesId = notes.map((step) => {
		return setTimeout(() => {
			console.log(step.type);
		}, step.time);

	});

	setTimeout(run, 5000);
})();
*/

