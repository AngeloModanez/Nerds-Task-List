import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logo: {
        width: 184,
        height: 184,
        margin: 'auto',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7f5e1',
    },
    cardContainer: {
        width: 288,
        padding: 16,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#5f4237',
        backgroundColor: 'white',
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
        fontSize: 16,
        fontWeight: 500,
        color: '#5f4237',
    },
    input: {
        width: 288,
        padding: 8,
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 10,
        color: '#5f4237',
        borderColor: '#5f4237',
    },
    btnLg: {
        width: 288,
        padding: 8,
        borderRadius: 24,
        alignItems: 'center',
        backgroundColor: '#fcb224',
    },
    btn: {
        width: 128,
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    btnSm: {
        padding: 8,        
        borderRadius: 8,
        justifyContent: 'center',
    },
})