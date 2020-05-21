import { combineReducers} from 'redux';
import todoAppState from './todoReducers';
export default combineReducers({
    todos:todoAppState
})