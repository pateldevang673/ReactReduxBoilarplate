import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';


const intialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
 
    intialState,
    compose(
    applyMiddleware(...middleware),
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()

    )
    );

export default store;