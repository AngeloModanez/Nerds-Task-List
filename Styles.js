import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardContainer: {
        width: 288,
        padding: 16,
        borderWidth: 1,
        borderRadius: 16,
    },
    footer: {
        width: 288,
        bottom: 48,
        position: 'fixed',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        fontWeight: 700,
    },
    input: {
        width: 288,
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
    },
    btn: {
        width: 288,
        padding: 8,
        borderRadius: 24,
        alignItems: 'center',
    },
    btnMd: {
        width: 128,
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    btnSm: {
        padding: 8,
        borderRadius: 8,
    },
})