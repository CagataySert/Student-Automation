import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    studentListBox: {
        width: width * 0.8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 10
    },
    studentDataRow: {
        padding: 10,
    },
    textStyle: {
        fontSize: 14,
        color: 'white'
    },
    plusIcon: {
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10
    },
    detailIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})