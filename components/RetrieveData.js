import { AsyncStorage } from 'react-native';

export default _retrieveData = async () => {
    let response;
    try {
        response = await AsyncStorage.getItem('studentAutomation') || 'none';
    }
    catch (error) {
        console.log(error.message);
    }
    return JSON.parse(response);
}