import { combineReducers } from 'redux';
import toggler from './booleanHandlerReducer';
// import toggler from './booleanHandlerReducer';


const rootReducer = combineReducers({
    
    toggler:toggler,
    // toggler
});
export default rootReducer