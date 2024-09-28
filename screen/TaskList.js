import { styles } from '../Styles';
import { ScrollView } from 'react-native-web';
import { FaRegTrashAlt } from "react-icons/fa";
import { SafeAreaView, View, FlatList, Text, Pressable } from 'react-native';

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

const Item = ({ title }) => (
    <View style={styles.cardContainer}>
        <CheckBox
            style={{ flex: 1, padding: 10 }}
            onClick={() => {
                this.setState({
                    isChecked: !this.state.isChecked
                })
            }}
            isChecked={this.state.isChecked}
            leftText={"CheckBox"}
        />F
        <View style={styles.row}>
            <View style={styles.col}>
                <Checkbox {...label} />
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={{ fontSize: 12 }}>Prazo: 15/12/2006</Text>
            </View>
            <View style={styles.col}>
                <View style={styles.row}>
                    <Pressable style={styles.editBtn}>
                        <Text style={{ color: 'white' }}>@</Text>
                    </Pressable>
                    <Pressable style={styles.deleteBtn}>
                        <Text style={{ color: 'white' }}>@</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
);

export function TaskList() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </SafeAreaView>
            <Pressable style={styles.newTaskBtn}>
                <Text style={styles.textBtn}>+</Text>
            </Pressable>
        </View>
    );
}

