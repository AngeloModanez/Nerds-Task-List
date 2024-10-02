import { styles } from '../Styles';
import { View, Text, TextInput, Pressable } from 'react-native';

export function NewTask({ navigation }) {
    return (
        <View style={[styles.container, { paddingTop: 24, }]}>
            <View style={{ marginBottom: 116 }}>
                <Text style={styles.title}>Title:</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 24 }]}
                    maxLength={16}
                    placeholder='Insert Task Name'>
                </TextInput>

                <Text style={styles.title}>Data:</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 24 }]}
                    placeholder='Insert Task Close Data'>
                </TextInput>

                <Text style={styles.title}>Description:</Text>
                <TextInput
                    style={styles.input}
                    editable
                    multiline
                    maxLength={80}
                    numberOfLines={4}
                    placeholder='Insert Task Description'>
                </TextInput>
            </View>
            <View style={styles.footer}>
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                    <View style={styles.col}>
                        <Pressable style={[styles.btnMd, { backgroundColor: 'red' }]}
                            onPress={() => navigation.navigate('TaskList')}>
                            <Text style={[styles.text, { color: 'white' }]}>Cancel</Text>
                        </Pressable>
                    </View>
                    <View style={styles.col}>
                        <Pressable style={[styles.btnMd, { backgroundColor: 'green' }]}
                            onPress={() => navigation.navigate('TaskList')}>
                            <Text style={[styles.text, { color: 'white' }]}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}   