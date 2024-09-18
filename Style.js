import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        margin: 'auto',
        marginBottom: 70,
    },
    loginContainer: {
        marginBottom: 30,
    },
    label: {
        fontSize: 20,
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
    },
    button: {
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    textButton: {
        fontSize: 20,
        color: 'white',
    },
})