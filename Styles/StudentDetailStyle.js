import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');



export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    studentListBox: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        width: width * 0.8,
        padding: 10,
    },
    whiteText: {
        color: 'white'
    },
    lastRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsView: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    deleteIcon: {
        marginRight: 10
    },
    updateIcon: {
        marginRight: 10
    },
    addScoreButtonView: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20
    },
    addScoreButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    }
});