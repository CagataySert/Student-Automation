import { combineReducers } from 'redux';
import StudentReducer from './StudentReducer';
import NoteReducer from './NoteReducer';

export default Reducers = combineReducers({
    studentResponse: StudentReducer,
    noteResponse: NoteReducer
});