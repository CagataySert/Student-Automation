import {
    GET_NOTES,
    ADD_NEW_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE
} from '../actions/Types';
import _storeData from '../components/StoreData';
import _retrieveData from '../components/RetrieveData'


export const storeNote = (scores, id) => {
    console.log(scores, id);

    return (dispatch) => {
        const response = _retrieveData();
        response.then(data => {
            data.map((student) => student.id === id ? student.notes = scores : null);
            _storeData(data);
            dispatch({
                type: ADD_NEW_NOTE,
                payload: data
            });
        });
    }
}