import { styles } from '../Styles';
import { View, Text, TextInput, Pressable } from 'react-native';

export function Create({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 116 }}>
                <Text style={styles.text}>Title:</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 24 }]}
                    maxLength={16}
                    placeholder='Task Name'>
                </TextInput>

                <Text style={styles.text}>Data:</Text>
                <TextInput
                    style={[styles.input, { marginBottom: 24 }]}
                    placeholder='Task Close Data'>
                </TextInput>

                <Text style={styles.text}>Description:</Text>
                <TextInput
                    style={styles.input}
                    editable
                    multiline
                    maxLength={80}
                    numberOfLines={4}
                    placeholder='Task Description'>
                </TextInput>
            </View>
            <View style={styles.footer}>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Pressable style={[styles.btnMd, { backgroundColor: 'red' }]}
                            onPress={() => navigation.navigate('TaskList')}>
                            <Text style={[styles.title, { color: 'white' }]}>Cancel</Text>
                        </Pressable>
                    </View>
                    <View style={styles.col}>
                        <Pressable style={[styles.btnMd, { backgroundColor: 'green' }]}
                            onPress={() => navigation.navigate('TaskList')}>
                            <Text style={[styles.title, { color: 'white' }]}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}