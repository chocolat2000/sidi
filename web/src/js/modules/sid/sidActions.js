import flux from 'control';  

class SidActions {  
  constructor() {
    this.generateActions('noteOn', 'noteOff', 'changeNote', 'changePatch');
  }
}

export default flux.createActions(SidActions);  
