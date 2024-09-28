import { styles } from '../Styles';
import { View, Text, TextInput, Pressable } from 'react-native';

export function Login() {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 32 }}>
                <Text style={styles.title}>Log In</Text>
                <Text style={{ fontSize: 16 }}>User</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={{ fontSize: 16 }}>Password</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View>
                <Pressable style={styles.button}>
                    <Text style={styles.textBtn}>Log in</Text>
                </Pressable>
            </View>
        </View>
    );
}