import { styles } from '../Styles';
import { useState } from 'react';
import { ScrollView } from 'react-native-web';
import { LuFileEdit, LuTrash } from "react-icons/lu";
import Checkbox from 'expo-checkbox';
import { BlurView } from 'expo-blur';
import { SafeAreaView, View, FlatList, Text, Pressable, Modal } from 'react-native';

var DATA;

export function TaskList({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const Item = ({ title }) => (
        <View style={[styles.cardContainer, { marginBottom: 24 }]}>
            <View style={[styles.row, { justifyContent: 'space-between' }]}>
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                    <View style={styles.col}>
                        <Checkbox
                            style={[styles.checkbox, { marginEnd: 8 }]}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#4630EB' : undefined}
                        />
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={{ fontSize: 12 }}>Prazo: {data}</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Pressable style={[styles.btnSm, { backgroundColor: 'green', color: 'white' }]}
                            onPress={() => navigation.navigate('EditTask')}>
                            <LuFileEdit></LuFileEdit>
                        </Pressable>
                        <Pressable style={[styles.btnSm, { backgroundColor: 'red', color: 'white', marginLeft: 8 }]}
                            onPress={() => setModalVisible(true)}>
                            <LuTrash></LuTrash>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <View style={[styles.container, { paddingTop: 24, }]}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <BlurView intensity={8} tint='dark' style={[styles.container, { justifyContent: 'center' }]}>
                    <View style={[styles.cardContainer, { backgroundColor: 'white' }]}>
                        <View style={{ marginBottom: 24 }}>
                            <Text style={[styles.title, { textAlign: 'center' }]}>Excluir a Tarefa: {title}?</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-around' }]}>
                            <View style={styles.col}>
                                <Pressable
                                    style={[styles.btnSm, { backgroundColor: 'red', paddingHorizontal: 16 }]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={[styles.text, { color: 'white' }]}>Cancel</Text>
                                </Pressable>
                            </View>
                            <View style={styles.col}>
                                <Pressable
                                    style={[styles.btnSm, { backgroundColor: 'green', paddingHorizontal: 16 }]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={[styles.text, { color: 'white' }]}>Confirm</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </BlurView>
            </Modal>
            <ScrollView>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
            <View style={[{ width: '100%', height: 72, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}>
                <View style={{ width: '80%', height: 1, marginVertical: 16, backgroundColor: 'black' }} />
                <Pressable style={[styles.btn, { backgroundColor: 'green', marginBottom: 24 }]}
                    onPress={() => navigation.navigate('NewTask')}>
                    <Text style={[styles.text, { color: 'white' }]}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}