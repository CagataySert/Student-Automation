import { StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center'
    },
    inputStyle: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        width: width * 0.7,
        marginBottom: 10
    },
    Label: {
        color: 'black',
        marginBottom: 5
    },
    addButton: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: width * 0.3,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'black',
        color: 'white'
    }
})