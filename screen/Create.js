import { styles } from '../Styles';
import { View, Text, TextInput, Pressable } from 'react-native';

export function Create() {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 30 }}>
                <Text style={{ fontSize: 16 }}>Title:</Text>
                <TextInput
                    style={styles.input}
                    maxLength={16}
                    placeholder='Task Name'>
                </TextInput>

                <Text style={{ fontSize: 16 }}>Data:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Task Close Data'>
                </TextInput>

                <Text style={{ fontSize: 16 }}>Description:</Text>
                <TextInput
                    style={styles.input}
                    editable
                    multiline
                    maxLength={80}
                    numberOfLines={4}
                    placeholder='Task Description'>
                </TextInput>
            </View>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Pressable style={styles.cancelBtn}>
                        <Text style={styles.textBtn}>Cancel</Text>
                    </Pressable>
                </View>
                <View style={styles.col}>
                    <Pressable style={styles.continueBtn}>
                        <Text style={styles.textBtn}>Continue</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}