import flux from 'control';  
import actions from './sidActions';

class SidStore {
    constructor() {
        this.VOICE1 = {};
        this.VOICE2 = {};
        this.VOICE3 = {};
        this.VOICE1.on = false;
        this.VOICE2.on = false;
        this.VOICE3.on = false;
        this.VOICE1.freq = 5000;
        this.VOICE2.freq = 5000;
        this.VOICE3.freq = 5000;
        this.VOICE1.patch = {A:0,D:0,S:15:R:0};
        this.VOICE2.patch = {A:0,D:0,S:15:R:0};
        this.VOICE3.patch = {A:0,D:0,S:15:R:0};
        
        this.bindListeners({
            noteOn:     actions.noteOn,
            noteOff:    actions.noteOff,
            changeNote: actions.changeNote
        });

    }

    noteOn(voice) {
        switch(voice) {
            case "VOICE1":
                this.VOICE1.on = true;
                break;
            case "VOICE2":
                this.VOICE2.on = true;
                break;
            case "VOICE3":
                this.VOICE3.on = true;
                break;
        }
    }

    noteOff(voice) {
        switch(voice) {
            case "VOICE1":
                this.VOICE1.on = false;
                break;
            case "VOICE2":
                this.VOICE2.on = false;
                break;
            case "VOICE3":
                this.VOICE3.on = false;
                break;
        }
    }

    changeNote(voice, freq) {
        switch(voice) {
            case "VOICE1":
                this.VOICE1.freq = freq;
                break;
            case "VOICE2":
                this.VOICE2.freq = freq;
                break;
            case "VOICE3":
                this.VOICE3.freq = freq;
                break;
        }
    }

    changePatch(voice, patch) {
        switch(voice) {
            case "VOICE1":
                this.VOICE1.patch = patch;
                break;
            case "VOICE2":
                this.VOICE2.patch = patch;
                break;
            case "VOICE3":
                this.VOICE3.patch = patch;
                break;
        }
    }
}

export default flux.createStore(SidStore,'SidStore');  
