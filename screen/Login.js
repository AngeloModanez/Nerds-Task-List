import { style } from '../Style';
import { View, Text, TextInput, Pressable } from 'react-native';

export function Login() {
    return (
        <View>
            <View style={style.loginContainer}>
                <Text style={style.title}>App Task</Text>
                <Text style={style.label}>User</Text>
                <TextInput style={style.input}></TextInput>
                <Text style={style.label}>Password</Text>
                <TextInput style={style.input}></TextInput>
            </View>
            <Pressable style={style.button}>
                <Text style={style.textButton}>Log in</Text>
            </Pressable>
        </View>
    );
}