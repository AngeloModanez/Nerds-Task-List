import { useState } from 'react';
import { styles } from '../Styles';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.config';

export function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => navigation.navigate('Lista de Tarefas'))
            .catch(e => { console.log(e) });

        setPassword('');
        setEmail('');
    };

    return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
            <View style={{ marginBottom: 108 }}>
                <View style={{ marginBottom: 48 }}>
                    <Image style={styles.logo} source={require('../../assets/nerd.png')} />
                    <Text style={{ fontSize: 32, textAlign: 'center', fontWeight: 600, color: '#fcb224' }}>
                        Nerd's Task List
                    </Text>
                </View>

                <Text style={[styles.text, { marginLeft: 8, marginBottom: '4' }]}>Email</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 32 }]}
                    onChangeText={(text) => setEmail(text)}
                    value={email}>
                </TextInput>

                <Text style={[styles.text, { marginLeft: 8, marginBottom: '8' }]}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    value={password}>
                </TextInput>
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '80%', height: 2, marginVertical: 24, backgroundColor: '#5f4237' }} />
                <Pressable style={[styles.btnLg, { marginBottom: 8 }]}
                    onPress={userLogin}>
                    <Text style={[styles.text, { color: '#f7f5e1' }]}>Entrar</Text>
                </Pressable>
            </View>
        </View >
    );
}