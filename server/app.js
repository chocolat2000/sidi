var five = require("johnny-five");
var SID = require("./sid");
var deepstream = require("deepstream.io-client-js");

var board = new five.Board({port: "COM3"});
var ds = deepstream("192.168.1.105:6021").login();


board.on("ready", function() {
	var register = new five.ShiftRegister({
		pins: {
			data: 2,
			clock: 3,
			latch: 4
		}
	});

	SID1 = new SID(register);
	var SID1record = ds.record.getRecord("SID1");

	SID1record.whenReady(function() {
		SID1patch = SID1record.get("patch");
	});

	SID1record.subscribe("patch", function(value) {
		for(var voice in value) {
			if (typeof SID1.voices[voice] === "undefined") continue;

			SID1.applyVoicePatch(SID1.voices[voice],patch);

		}

		if(typeof value["filter"] !== "undefined") {
			var filterDelta =  value["filter"];

			SID1.applyFilterPatch(value);

		}
		
	});
	
	ds.event.subscribe("SID1", function(value) {

		for(var voice in value) {
			if (typeof SID1.voices[voice] === "undefined") continue;

			var voiceData = value[voice];

			switch(voiceData.action) {
				case "playnote":
					if(!isNaN(parseFloat(voiceData.frequency)) && isFinite(voiceData.frequency)) {
						SID1.changenote(SID1.voices[voice],voiceData.frequency);
					}
					SID1.playnote(SID1.voices[voice]);
					break;
				case "changenote":
					if(!isNaN(parseFloat(voiceData.frequency)) && isFinite(voiceData.frequency)) {
						SID1.changenote(SID1.voices[voice],voiceData.frequency);
					}
					break;
				case "stopnote":
					SID1.stopnote(SID1.voices[voice]);
					break;
				default:
					console.log("SID1 / " + voice + " received unknown action");

			}
		}

	});
	this.repl.inject({
		test: SID1.test,
		playnote: SID1.playnote,
		stopnote: SID1.stopnote,
		changenote: SID1.changenote,
		init: SID1.init,
		voices: SID1.voices,
		record: SID1record
	});

});

function parseDeltaAndApply(delta, applyFn) {
	if(Array.isArray(delta)) {
		if(delta.length < 3) {
			applyFn(delta[delta.length-1]);
		}
	} else {
		var patch = {};
		for(var param in delta) {
			if(Array.isArray(delta[param])) {
				if(delta[param].length < 3) {
					patch[param] = delta[param][delta[param].length-1];
				}
			}
		}
		applyFn(patch);
	}
}