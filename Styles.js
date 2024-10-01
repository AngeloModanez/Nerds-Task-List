import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardContainer: {
        width: 264,
        padding: 16,
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 24,
    },
    footer: {
        width: 264,
        bottom: '10%',
        position: 'fixed',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        fontSize: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: 700,
    },
    input: {
        width: 264,
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
    },
    btn: {
        width: 264,
        padding: 8,
        borderRadius: 24,
        alignItems: 'center',
    },
    btnSm: {
        padding: 8,
        borderRadius: 8,
    },
    btnMd: {
        width: 116,
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
})