import store from 'src/js/stores/TangibleStores';
import * as actions from 'src/js/actions/NetworkActions';


console.log('initial state ', store.getState());

store.subscribe(() => {
	console.log('state changed !! ', store.getState());
});

