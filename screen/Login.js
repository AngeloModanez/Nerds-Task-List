import { styles } from '../Styles';
import { View, Text, TextInput, Pressable } from 'react-native';

export function Login({ navigation }) {
    return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
            <View style={{ marginBottom: 124 }}>
                <Text style={[styles.title, { fontSize: 56, marginBottom: 64, textAlign: 'center' }]}>Log In</Text>
                <Text style={styles.title}>User</Text>
                <TextInput style={[styles.input, { marginBottom: 40 }]}></TextInput>
                <Text style={styles.title}>Password</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.footer}>
                <Pressable style={[styles.btn, { backgroundColor: 'blue' }]}
                    onPress={() => navigation.navigate('TaskList')}>
                    <Text style={[styles.text, { color: 'white' }]}>Log in</Text>
                </Pressable>
            </View>
        </View >
    );
}