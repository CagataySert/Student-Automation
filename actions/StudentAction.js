import {
    GET_STUDENTS,
    ADD_NEW_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT
} from '../actions/Types';
import _storeData from '../components/StoreData';
import _retrieveData from '../components/RetrieveData'



export const getStudents = () => {
    return (dispatch) => {
        const response = _retrieveData();
        response.then(data => {
            dispatch({
                type: GET_STUDENTS,
                payload: data
            });
        });
    }
}

export const storeStudent = (data) => {
    console.log('action');

    console.log('action', data);
    _storeData(data);
    return (dispatch) => {
        dispatch({
            type: ADD_NEW_STUDENT,
            payload: data
        });
    }
}
