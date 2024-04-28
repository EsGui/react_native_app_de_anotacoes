import { View, TextInput, StyleSheet } from "react-native";

export default function CreateNotes() {
    return (
        <View>
            <TextInput 
                style={styles.styleTextInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    styleTextInput: {
        display: 'flex',
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})