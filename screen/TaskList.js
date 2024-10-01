import { styles } from '../Styles';
import { ScrollView } from 'react-native-web';
import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text, Pressable, Modal } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '1234567890123456',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

export function TaskList({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const Item = ({ title }) => (
        <View style={styles.cardContainer}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={{ fontSize: 12 }}>Prazo: 15/12/2006</Text>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Pressable style={[styles.btnSm, { backgroundColor: 'green' }]}
                            onPress={() => navigation.navigate('Create')}>
                            <Text style={[styles.text, { color: 'white' }]}>Y</Text>
                        </Pressable>
                        <Pressable style={[styles.btnSm, { backgroundColor: 'red', marginLeft: 8 }]}
                            onPress={() => setModalVisible(true)}>
                            <Text style={[styles.text, { color: 'white' }]}>X</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View >
    );
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.title}>Title:</Text>
                        <Text style={styles.text}>Lavar Boga</Text>
                        <Text style={styles.title}>Data:</Text>
                        <Text style={styles.text}>12/05/1923</Text>
                        <Text style={styles.title}>Description:</Text>
                        <Text style={styles.text}>Lavar bem o Boga com Agua e Sabão</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Deseja Excluir Essa Tarefa?</Text>
                        <View style={styles.row}>
                            <View style={styles.col}>
                                <Pressable
                                    style={[styles.btnMd, { backgroundColor: 'red' }]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={[styles.text, { color: 'white' }]}>Cancel</Text>
                                </Pressable>
                            </View>
                            <View style={styles.col}>
                                <Pressable
                                    style={[styles.btnMd, { backgroundColor: 'green' }]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={[styles.text, { color: 'white' }]}>Confirm</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View>
                <SafeAreaView>
                    <ScrollView>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <Item title={item.title} />}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                </SafeAreaView>
                <View style={styles.footer}>
                    <Pressable style={[styles.btn, { backgroundColor: 'green' }]}
                        onPress={() => navigation.navigate('Create')}>
                        <Text style={[styles.text, { color: 'white' }]}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

