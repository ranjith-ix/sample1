import { combinedReducers } from 'redux';
import LibraryReducer from './LibraryReducer';


export default combinedReducers({
    libraries: LibraryReducer
});