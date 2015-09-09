var
	BitReverseTable256 = 
		[
		  0x00, 0x80, 0x40, 0xC0, 0x20, 0xA0, 0x60, 0xE0, 0x10, 0x90, 0x50, 0xD0, 0x30, 0xB0, 0x70, 0xF0, 
		  0x08, 0x88, 0x48, 0xC8, 0x28, 0xA8, 0x68, 0xE8, 0x18, 0x98, 0x58, 0xD8, 0x38, 0xB8, 0x78, 0xF8, 
		  0x04, 0x84, 0x44, 0xC4, 0x24, 0xA4, 0x64, 0xE4, 0x14, 0x94, 0x54, 0xD4, 0x34, 0xB4, 0x74, 0xF4, 
		  0x0C, 0x8C, 0x4C, 0xCC, 0x2C, 0xAC, 0x6C, 0xEC, 0x1C, 0x9C, 0x5C, 0xDC, 0x3C, 0xBC, 0x7C, 0xFC, 
		  0x02, 0x82, 0x42, 0xC2, 0x22, 0xA2, 0x62, 0xE2, 0x12, 0x92, 0x52, 0xD2, 0x32, 0xB2, 0x72, 0xF2, 
		  0x0A, 0x8A, 0x4A, 0xCA, 0x2A, 0xAA, 0x6A, 0xEA, 0x1A, 0x9A, 0x5A, 0xDA, 0x3A, 0xBA, 0x7A, 0xFA,
		  0x06, 0x86, 0x46, 0xC6, 0x26, 0xA6, 0x66, 0xE6, 0x16, 0x96, 0x56, 0xD6, 0x36, 0xB6, 0x76, 0xF6, 
		  0x0E, 0x8E, 0x4E, 0xCE, 0x2E, 0xAE, 0x6E, 0xEE, 0x1E, 0x9E, 0x5E, 0xDE, 0x3E, 0xBE, 0x7E, 0xFE,
		  0x01, 0x81, 0x41, 0xC1, 0x21, 0xA1, 0x61, 0xE1, 0x11, 0x91, 0x51, 0xD1, 0x31, 0xB1, 0x71, 0xF1,
		  0x09, 0x89, 0x49, 0xC9, 0x29, 0xA9, 0x69, 0xE9, 0x19, 0x99, 0x59, 0xD9, 0x39, 0xB9, 0x79, 0xF9, 
		  0x05, 0x85, 0x45, 0xC5, 0x25, 0xA5, 0x65, 0xE5, 0x15, 0x95, 0x55, 0xD5, 0x35, 0xB5, 0x75, 0xF5,
		  0x0D, 0x8D, 0x4D, 0xCD, 0x2D, 0xAD, 0x6D, 0xED, 0x1D, 0x9D, 0x5D, 0xDD, 0x3D, 0xBD, 0x7D, 0xFD,
		  0x03, 0x83, 0x43, 0xC3, 0x23, 0xA3, 0x63, 0xE3, 0x13, 0x93, 0x53, 0xD3, 0x33, 0xB3, 0x73, 0xF3, 
		  0x0B, 0x8B, 0x4B, 0xCB, 0x2B, 0xAB, 0x6B, 0xEB, 0x1B, 0x9B, 0x5B, 0xDB, 0x3B, 0xBB, 0x7B, 0xFB,
		  0x07, 0x87, 0x47, 0xC7, 0x27, 0xA7, 0x67, 0xE7, 0x17, 0x97, 0x57, 0xD7, 0x37, 0xB7, 0x77, 0xF7, 
		  0x0F, 0x8F, 0x4F, 0xCF, 0x2F, 0xAF, 0x6F, 0xEF, 0x1F, 0x9F, 0x5F, 0xDF, 0x3F, 0xBF, 0x7F, 0xFF
		],

	// SID Address table
	FREQLO1	= BitReverseTable256[32],
	FREQHI1	= BitReverseTable256[33],
	PWLO1	= BitReverseTable256[34],
	PWHI1	= BitReverseTable256[35],
	CTRL1	= BitReverseTable256[36],
	AD1		= BitReverseTable256[37],
	SR1		= BitReverseTable256[38],
	FREQLO2	= BitReverseTable256[39],
	FREQHI2	= BitReverseTable256[40],
	PWLO2	= BitReverseTable256[41],
	PWHI2	= BitReverseTable256[42],
	CTRL2	= BitReverseTable256[43],
	AD2		= BitReverseTable256[44],
	SR2		= BitReverseTable256[45],
	FREQLO3	= BitReverseTable256[46],
	FREQHI3	= BitReverseTable256[47],
	PWLO3	= BitReverseTable256[48],
	PWHI3	= BitReverseTable256[49],
	CTRL3	= BitReverseTable256[50],
	AD3		= BitReverseTable256[51],
	SR3		= BitReverseTable256[52],
	FCLO	= BitReverseTable256[53],
	FCHI	= BitReverseTable256[54],
	RESFILT	= BitReverseTable256[55],
	MODEVOL	= BitReverseTable256[56],
	POTX	= BitReverseTable256[57],
	POTY	= BitReverseTable256[58],
	OSC3RAND= BitReverseTable256[59],
	ENV3	= BitReverseTable256[60],

	VOICE1	= 1,
	VOICE2	= 2,
	VOICE3	= 4,

	HP		= 64,
	BP		= 32,
	LP		= 16;


module.exports = function(register) {

	var SIDpatch = {
		"VOICE1" : {
			"A" : 0,
			"D" : 0,
			"S" : 15,
			"R" : 0
		},
		"FILTER" : {
			"FC" : 240,
			"RES" : 8,
			"VOICE" : VOICE1,
			"MODE" : LP,
			"VOL" : 15
		}
	};

	function playnote(voice,velocity) {
		if(voice & VOICE1) {
			register.send(BitReverseTable256[17],CTRL1);
		}
		if(voice & VOICE2) {
			register.send(BitReverseTable256[17],CTRL2);
		}
		if(voice & VOICE3) {
			register.send(BitReverseTable256[17],CTRL3);
		}
	}

	function changenote(voice,frequency) {
		if(voice & VOICE1) {
			register.send(BitReverseTable256[frequency&255],FREQLO1);
			register.send(BitReverseTable256[frequency>>8],FREQHI1);
		}
		if(voice & VOICE2) {
			register.send(BitReverseTable256[frequency&255],FREQLO2);
			register.send(BitReverseTable256[frequency>>8],FREQHI2);
		}
		if(voice & VOICE3) {
			register.send(BitReverseTable256[frequency&255],FREQLO3);
			register.send(BitReverseTable256[frequency>>8],FREQHI3);
		}
	}

	function stopnote(voice) {
		if(voice & VOICE1) {
			register.send(BitReverseTable256[16],CTRL1);
		}
		if(voice & VOICE2) {
			register.send(BitReverseTable256[16],CTRL2);
		}
		if(voice & VOICE3) {
			register.send(BitReverseTable256[16],CTRL3);
		}
	}

	function applyVoicePatch(voice, patch) {
		if(voice & VOICE1) {
			console.log("VOICE1 new patch : ");
			console.log(patch);
			for(var param in patch) {
				switch(param) {
					case "A":
						if(SIDpatch.VOICE1.A !== patch[param]) {
							register.send(BitReverseTable256[(patch[param]<<4) | SIDpatch.VOICE1.D], AD1);
							SIDpatch.VOICE1.A = patch[param];
						}
						break;
					case "D":
						if(SIDpatch.VOICE1.D !== patch[param]) {
							register.send(BitReverseTable256[(SIDpatch.VOICE1.A<<4) | patch[param]], AD1);
							SIDpatch.VOICE1.D = patch[param];
						}
						break;
					case "S":
						if(SIDpatch.VOICE1.S !== patch[param]) {
							register.send(BitReverseTable256[(patch[param]<<4) | SIDpatch.VOICE1.R], SR1);
							SIDpatch.VOICE1.S = patch[param];
						}
						break;
					case "R":
						if(SIDpatch.VOICE1.R !== patch[param]) {
							register.send(BitReverseTable256[(SIDpatch.VOICE1.S<<4) | patch[param]], SR1);
							SIDpatch.VOICE1.R = patch[param];
						}
						break;
				}
			}
		}
		if(voice & VOICE2) {
			console.log("VOICE2 new patch : ");
			console.log(patch);
		}
		if(voice & VOICE3) {
			console.log("VOICE3 new patch : ");
			console.log(patch);
		}
	}

	function applyFilterPatch(patch) {
		console.log("Filter new patch : ");
		console.log(patch);
		for(var param in patch) {
			switch(param) {
				case "FC":
					if(SIDpatch.FILTER.FC !== patch[param]) {
						register.send(BitReverseTable256[patch[param]&7],FCLO);
						register.send(BitReverseTable256[patch[param]>>3],FCHI);
						SIDpatch.FILTER.FC = patch[param];
					}
					break;
				case "RES":
					if(SIDpatch.FILTER.RES !== patch[param]) {
						register.send(BitReverseTable256[(patch[param]<<4) | SIDpatch.FILTER.VOICE], RESFILT);
						SIDpatch.FILTER.RES = patch[param];
					}
					break;
				case "VOICE":
					if(SIDpatch.FILTER.VOICE !== patch[param]) {
						register.send(BitReverseTable256[(SIDpatch.FILTER.RES<<4) | patch[param]], RESFILT);
						SIDpatch.FILTER.VOICE = patch[param];
					}
					break;
				case "MODE":
					if(SIDpatch.FILTER.MODE !== patch[param]) {
						register.send(BitReverseTable256[(patch[param]<<4) | SIDpatch.FILTER.VOL], MODEVOL);
						SIDpatch.FILTER.MODE = patch[param];
					}
					break;
				case "VOL":
					if(SIDpatch.FILTER.VOL !== patch[param]) {
						register.send(BitReverseTable256[(SIDpatch.FILTER.MODE<<4) | patch[param]], MODEVOL);
						SIDpatch.FILTER.VOL = patch[param];
					}
					break;

			}
		}

	}

	function init() {
		register.send(0,0);

		setTimeout(function() {
			register.send(BitReverseTable256[0], AD1);
			register.send(BitReverseTable256[240], SR1);
			register.send(BitReverseTable256[0], AD2);
			register.send(BitReverseTable256[240], SR2);
			register.send(BitReverseTable256[0], AD2);
			register.send(BitReverseTable256[240], SR3);
			register.send(BitReverseTable256[0], RESFILT);
			register.send(BitReverseTable256[79],MODEVOL);
		}, 100);
	}

	function test(a,b) {
		register.send(a,b);
	}

	init();

	return  {
		voices: {"VOICE1": VOICE1, "VOICE2": VOICE2, "VOICE3": VOICE3},
		playnote: playnote,
		stopnote: stopnote,
		changenote: changenote,
		applyVoicePatch: applyVoicePatch,
		applyFilterPatch: applyFilterPatch,
		test: test,
		init: init
	}
}
