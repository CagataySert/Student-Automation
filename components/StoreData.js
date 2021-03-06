import { AsyncStorage } from 'react-native';


export default _storeData = async (data) => {
    try {
        const strData = JSON.stringify(data);

        await AsyncStorage.setItem('studentAutomation1', strData);
    }
    catch (error) {
        console.log(error.message);
    }
}