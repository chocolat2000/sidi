import {handleActions} from 'redux-actions';

const reducers = handleActions({
	UPDATE_TANGIBLE: (state, action) => (Object.assign({},state,{tangibles: Object.assign({}, state.tangibles,{[action.payload.id]: action.payload })})),
	UPDATE_PARTITION: (state, action) => (Object.assign({},state,{partitions: Object.assign({}, state.partitions, {[action.payload.id]:action.payload})}))
}, {tangibles: {}, partitions: {}});

export default reducers;