import { createStore , applyMiddleware,compose} from 'redux';
import todos from '../reducers/todoReducers';
import thunk from 'redux-thunk';
const middleware = [thunk];
export default function configureStore(initialState){
    return createStore(todos,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));
}