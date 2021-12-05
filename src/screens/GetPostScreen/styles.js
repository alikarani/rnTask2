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
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 6.5 * width
    },
    backToCreate: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 100
    },
    listItem: {
        // flexDirection: "row",
        // alignItems: 'center',
        paddingBottom: 2 * width,
        paddingTop: 4 * width,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 4 * width
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default styles;