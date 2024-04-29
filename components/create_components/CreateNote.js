import { useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import MyContext from "../../contextApi/MyContext";

export default function CreateNotes() {
    const {
        setNotaCriada
    } = useContext(MyContext);

    return (
        <View>
            <TextInput
                style={styles.styleTextInput}
                multiline={true}
                numberOfLines={5}
                onChangeText={(text) => setNotaCriada(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    styleTextInput: {
    }
})