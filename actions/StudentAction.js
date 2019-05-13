import {
    GET_STUDENT_DETAIL,
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

export const getStudentDetail = (id) => {
    return (dispatch) => {
        const response = _retrieveData();
        response.then(data => {
            const filteredData = data.filter((student) => student.id === id);
            dispatch({
                type: GET_STUDENT_DETAIL,
                payload: filteredData
            });
        });
    }
}

export const storeStudent = (data) => {
    _storeData(data);
    return (dispatch) => {
        dispatch({
            type: ADD_NEW_STUDENT,
            payload: data
        });
    }
}


export const deleteStudent = (id) => {
    return dispatch => {
        const response = _retrieveData();
        response.then(data => {
            const filteredData = data.filter((student) => student.id !== id);
            _storeData(filteredData);
            dispatch({
                type: DELETE_STUDENT,
                payload: filteredData
            });
        });
    }
}