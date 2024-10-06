import { useState } from "react";
import { styles } from '../Styles';
import { View, Text, TextInput, Pressable } from 'react-native';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../config/firebase.config';

export function EditTask({ navigation, route }) {
    const { task, onGoBack } = route.params || {};

    if (!task) {
        return (
            <View>
                <Text>Task não encontrada. Verifique a navegação.</Text>
            </View>
        );
    }

    const [title, setTitle] = useState(task.title);
    const [date, setDate] = useState(task.date);

    const saveTask = async () => {
        try {
            await updateDoc(doc(db, "Task", task.id), { title, date });
            onGoBack();
            navigation.navigate('Lista de Tarefas');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
            <View style={{ marginBottom: 88 }}>
                <View>
                    <Text style={{ fontSize: 32, marginBottom: 32, textAlign: 'center', fontWeight: 600, color: '#fcb224' }}>
                        Editar Tarefa:
                    </Text>
                </View>
                <Text style={[styles.text, { marginLeft: 8, marginBottom: '8' }]}>Título:</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 24 }]}
                    maxLength={16}
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Escreva o novo título'
                />

                <Text style={[styles.text, { marginLeft: 8, marginBottom: '8' }]}>Data:</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 24 }]}
                    value={date}
                    onChangeText={setDate}
                    placeholder='Escreva a nova data de fechamento'
                />

            </View>

            <View style={[styles.row, { justifyContent: 'space-between', width: 288, }]}>
                <View style={styles.col}>
                    <Pressable style={[styles.btn, { backgroundColor: '#fe7d46' }]}
                        onPress={() => navigation.navigate('Lista de Tarefas')}>
                        <Text style={[styles.text, { color: '#f7f5e1' }]}>Cancelar</Text>
                    </Pressable>
                </View>
                <View style={styles.col}>
                    <Pressable style={[styles.btn, { backgroundColor: '#fcb224' }]}
                        onPress={saveTask}>
                        <Text style={[styles.text, { color: '#f7f5e1' }]}>Continuar</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    );
}   