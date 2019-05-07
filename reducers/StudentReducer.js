import {
    GET_STUDENTS,
    ADD_NEW_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT
} from '../actions/Types';


let initalState = [];

const StudentReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case GET_STUDENTS:
            return console.log('get');
        case ADD_NEW_STUDENT:
            return console.log('add');
        case UPDATE_STUDENT:
            return console.log('update');
        case DELETE_STUDENT:
            return console.log('delete');
        default:
            return state;
    }
}

export default StudentReducer;