import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Panel} from 'react-bootstrap';

import Navigator from 'components/navigator'
import SidController from 'modules/sid/sidController'
import Partition from 'modules/partition/partition'

import * as NetworkActions from 'actions/NetworkActions';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.props.dispatch(NetworkActions.registerTangibles());
    this.props.dispatch(NetworkActions.registerPartitions());
  }

  render() {
    return (
      <div className="container">
        <Navigator {...bindActionCreators({addServerTangible: NetworkActions.addServerTangible, addServerPartition: NetworkActions.addServerPartition}, this.props.dispatch)} />
        {this.props.tangibles ? 

          (
            Object.getOwnPropertyNames(this.props.tangibles).map( (id,key) => {
              let tangible = this.props.tangibles[id];
              switch (tangible.type) {
                case 'sid':
                  return(
                    <Panel key={key}>
                      <SidController {...tangible} {...bindActionCreators({updateServerTangible: NetworkActions.updateServerTangible}, this.props.dispatch)} />
                    </Panel>
                  );
                  break;

              }
            })
          )

          : null
        }
        
        {this.props.partitions ?
          
          (
            Object.getOwnPropertyNames(this.props.partitions).map( (id,key) => {
              let partition = this.props.partitions[id];
              return (
                  <Panel key={key}>
                    <Partition {...partition} {...bindActionCreators({updateServerPartition: NetworkActions.updateServerPartition}, this.props.dispatch)} />
                  </Panel>
                );
            })
          )

          : null
        }

      </div>
    );
  }
}

export default connect(state => (state))(Main);
//export default Main;  ;
