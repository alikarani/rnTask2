import { StyleSheet } from 'react-native';
import { width } from '../../Units'

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        width: width * 90,
        alignSelf: 'center'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 6.5 * width
    },
    listItem: {
        // flexDirection: "row",
        // alignItems: 'center',
        paddingBottom: 2 * width,
        paddingTop: 4 * width,
    },
    submitButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    errorText: {
        marginLeft: 12,
        color: 'red'
    },
    successText: {
        marginLeft: 12,
        color: 'green'
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: width * 4.2,
        fontWeight: 'bold'
    },
    postScreenButton:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;