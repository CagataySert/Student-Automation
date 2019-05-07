import { combineReducers } from 'redux';
import StudentReducer from './StudentReducer';
import NoteReducer from './NoteReducer';

export default Reducers = combineReducers({
    Student: StudentReducer,
    Note: NoteReducer
});