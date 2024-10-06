import { useState, useEffect } from 'react';
import { styles } from '../Styles';
import { BlurView } from 'expo-blur';
import { Checkbox } from 'expo-checkbox';
import { PlusIcon, TrashIcon, PencilIcon } from "@primer/octicons-react";
import { View, Text, Pressable, Modal, ScrollView } from 'react-native';
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../config/firebase.config';

export function TaskList({ navigation }) {
    const [tasks, setTasks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [taskDelete, setTaskDelete] = useState(null);

    useEffect(() => { serchTask() }, []);

    const serchTask = async () => {
        const querySnapshot = await getDocs(collection(db, "Task"));
        const tasksArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(tasksArray);
    };

    const newTask = () => {
        navigation.navigate('Nova Tarefa', { onGoBack: serchTask, });
    };

    const deleteTask = async () => {
        if (taskDelete) {
            try {
                await deleteDoc(doc(db, "Task", taskDelete));
                serchTask();
            } catch (e) {
                console.log(e);
            }
            setTaskDelete(null);
        }
        setModalVisible(false);
    };

    const confirmDelete = (id) => {
        setTaskDelete(id);
        setModalVisible(true);
    };

    const editStatus = async (id, currentStatus) => {
        try {
            const taskRef = doc(db, "Task", id);
            await updateDoc(taskRef, { completed: !currentStatus });
            serchTask();
        } catch (e) {
            console.log(e);
        }
    };

    const Item = ({ task }) => {
        const [checked, setChecked] = useState(task.completed || false);

        const editCheckbox = () => {
            setChecked(!checked);
            editStatus(task.id, checked);
        };

        return (
            <View style={[styles.cardContainer, { marginBottom: 24 }]}>
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                    <View style={[styles.row, { justifyContent: 'space-between' }]}>
                        <View style={styles.col}>
                            <Checkbox
                                style={{ marginRight: 8, width: 18, height: 18 }}
                                value={checked}
                                onValueChange={editCheckbox}
                                color={checked ? '#fe7d46' : undefined}
                            />
                        </View>
                        <View style={styles.col}>
                            <Text style={[styles.text, { color: '#fcb224' }]}>{task.title}</Text>
                            <Text style={{ fontSize: 12, color: '#5f4237', }}>Prazo: {task.date}</Text>
                        </View>
                    </View>
                    <View style={styles.col}>
                        <View style={styles.row}>
                            <Pressable style={[styles.btnSm, { backgroundColor: '#fcb224' }]}
                                onPress={() => navigation.navigate('Editar Tarefa', { task, onGoBack: 'Lista de Tarefas' })}>
                                <Text style={[styles.text, { color: '#f7f5e1' }]}>
                                    <PencilIcon />
                                </Text>
                            </Pressable>
                            <Pressable style={[styles.btnSm, { backgroundColor: '#fe7d46', marginLeft: 8, justifyContent: 'center' }]}
                                onPress={() => confirmDelete(task.id)}>
                                <Text style={[styles.text, { color: '#f7f5e1' }]}>
                                    <TrashIcon />
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={[styles.container, { paddingTop: 24, }]}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}>
                <BlurView intensity={8} tint='dark' style={[styles.container, { justifyContent: 'center' }]}>
                    <View style={styles.cardContainer}>
                        <View style={{ marginBottom: 24 }}>
                            <Text style={[styles.text, { textAlign: 'center' }]}>Deseja excluir a Tarefa?</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-around' }]}>
                            <View style={styles.col}>
                                <Pressable
                                    style={[styles.btnSm, { backgroundColor: '#fe7d46', paddingHorizontal: 16 }]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={[styles.text, { color: '#f7f5e1' }]}>Cancelar</Text>
                                </Pressable>
                            </View>
                            <View style={styles.col}>
                                <Pressable
                                    style={[styles.btnSm, { backgroundColor: '#fcb224', paddingHorizontal: 16 }]}
                                    onPress={deleteTask}>
                                    <Text style={[styles.text, { color: '#f7f5e1' }]}>Confirmar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </BlurView>
            </Modal>
            <ScrollView>
                {tasks.map(task => (<Item key={task.id} task={task} />))}
            </ScrollView>
            <View style={[{ width: '100%', height: 108, alignItems: 'center', backgroundColor: '#f7f5e1' }]}>
                <View style={{ width: '80%', height: 2, marginVertical: 24, backgroundColor: '#5f4237' }} />
                <Pressable style={[styles.btnLg, { marginBottom: 48 }]}
                    onPress={newTask}>
                    <Text style={[styles.text, { color: '#f7f5e1' }]}>
                        <PlusIcon />
                    </Text>
                </Pressable>
            </View>
        </View >
    );
}