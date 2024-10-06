import { useState } from "react";
import { styles } from '../Styles';
import { View, Text, TextInput, Pressable } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebase.config';


export function NewTask({ navigation, route }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const addTask = async () => {
        if (title.trim() === '' || date.trim() === '') {
            return;
        }

        try {
            await addDoc(collection(db, "Task"), { title: title, date });
            navigation.navigate('Lista de Tarefas');
            route.params?.onGoBack();

            setTitle('');
            setDate('');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
            <View style={{ marginBottom: 88 }}>
                <View>
                    <Text style={{ fontSize: 32, marginBottom: 32, textAlign: 'center', fontWeight: 600, color: '#fcb224' }}>
                        Criar Nova Tarefa:
                    </Text>
                </View>
                <Text style={[styles.text, { marginLeft: 8, marginBottom: '8' }]}>Título:</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 24 }]}
                    maxLength={16}
                    placeholder='Título da tarefa'
                    value={title}
                    onChangeText={setTitle}

                />

                <Text style={[styles.text, { marginLeft: 8, marginBottom: '8' }]}>Data:</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 24 }]}
                    maxLength={10}
                    placeholder='Data de fechamento'
                    value={date}
                    onChangeText={setDate}
                />
            </View>

            <View style={[styles.row, { justifyContent: 'space-between', width: 288, }]}>
                <View style={styles.col}>
                    <Pressable style={[styles.btn, { backgroundColor: '#fe7d46' }]}
                        onPress={() => navigation.navigate('Lista de Tarefas')}>
                        <Text style={[styles.text, { color: '#f7f5e1' }]}> Cancelar</Text>
                    </Pressable>
                </View>
                <View style={styles.col}>
                    <Pressable style={[styles.btn, { backgroundColor: '#fcb224' }]}
                        onPress={addTask}>
                        <Text style={[styles.text, { color: '#f7f5e1' }]}>Continuar</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    );
}   