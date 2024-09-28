import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        margin: 56,
        fontSize: 48,
    },
    input: {
        width: 264,
        padding: 8,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 24,
    },
    button: {
        width: 264,
        padding: 8,
        borderRadius: 24,
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    newTaskBtn: {
        width: 264,
        padding: 8,
        borderRadius: 24,
        alignItems: 'center',
        backgroundColor: 'green',
    },
    editBtn: {
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 8,
    },
    deleteBtn: {
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 8,
        marginLeft: 8,
    },
    cancelBtn: {
        width: 116,
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'red',
    },
    continueBtn: {
        width: 116,
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        marginLeft: 32
    },
    textBtn: {
        fontSize: 16,
        color: 'white',
    },
    cardContainer: {
        width: 264,
        padding: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderRadius: 16,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 4,
    },
})