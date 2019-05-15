import {
    GET_NOTES,
    ADD_NEW_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE
} from '../actions/Types';


let INITIAL_STATE = {
    data: []
};


const NoteReducer = (state = INITIAL_STATE, { type, payload }) => {
    console.log('reducer', state, type, payload);
    switch (type) {
        case GET_NOTES:
            return { ...state, data: [payload] };
        case ADD_NEW_NOTE:
            console.log('1111', payload);
            return { ...state, data: payload };
        default:
            return state;
    }
}

export default NoteReducer;