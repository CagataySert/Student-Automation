import {
    GET_STUDENT_DETAIL,
    GET_STUDENTS,
    ADD_NEW_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT
} from '../actions/Types';


let INITIAL_STATE = {
    data: []
};

const StudentReducer = (state = INITIAL_STATE, { type, payload }) => {
    console.log('reducer', state, type, payload);
    switch (type) {
        case GET_STUDENT_DETAIL:
            return { ...state, data: [payload] };
        case GET_STUDENTS:
            return { ...state, data: [...state.data, payload] };
        case ADD_NEW_STUDENT:
            return { ...state, data: [payload] };
        case UPDATE_STUDENT:
            return console.log('update');
        case DELETE_STUDENT:
            return { ...state, data: [payload] };
        default:
            return state;
    }
}

export default StudentReducer;