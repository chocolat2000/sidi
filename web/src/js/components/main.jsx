import React from 'react';

import connectToStores from 'alt/utils/connectToStores';  
import AltContainer from 'alt/AltContainer';
import TangiblesListStore from 'stores/TangiblesListStore';
import NetworkActions from 'actions/NetworkActions';

import {Panel} from 'react-bootstrap';

import Navigator from 'components/navigator'
import SidController from 'modules/sid/sidController'

class Main extends React.Component {

  constructor(props) {
    super(props);

    NetworkActions.connectDeepStream('127.0.0.1:6020');
  }

  static getStores(props) {
    return [TangiblesListStore];
  }

  static getPropsFromStores(props) {
    return TangiblesListStore.getState();
  }

  render() {
    return (
      <div className="container">
      <AltContainer actions={NetworkActions} component={Navigator} />
        {this.props.tangibles.map((id,key) => {
          //console.log(TangiblesStore.getState());
          //let tangible = TangiblesStore.getTangible(id) || {};
          //console.log('tangible');
          //console.log(tangible);
          //switch(tangible.type) {
          //  case 'sid':
            return (
              <Panel key={key}>
              <SidController tangibleId={id} updateServerTangible={NetworkActions.updateServerTangible} removeServerTangible={() => {NetworkActions.removeServerTangible(id);}} />
              </Panel>
              );
          //  break;
          //} //switch
        })}
      </div>
    );
  }
}

export default connectToStores(Main);  
//export default Main;  