import React from 'react';  
import connectToStores from 'alt/utils/connectToStores';  
import DummyStore from 'stores/dummyStore';  
import DummyActions from 'actions/dummyActions';

class Example extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    }

    this.onChange = (evt) => {
      this.setState({name: evt.target.value});
      DummyActions.updateName(evt.target.value);
    }
  }

  static getStores(props) {
    return [DummyStore];
  }

  static getPropsFromStores(props) {
    return DummyStore.getState();
  }

  render() {
    return (
      <div>
      <input type="text" value={this.state.name} onChange={this.onChange}/>
      <h1>It works: {this.props.name}</h1>
      </div>
      );
  }

  
}

export default connectToStores(Example);  
