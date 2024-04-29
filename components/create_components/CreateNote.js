import { useContext, useEffect } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import MyContext from "../../contextApi/MyContext";

export default function CreateNotes({ navigation }) {
    const {
        setListNotas,
        setTextNote,
        textNote,
        listNotes,
    } = useContext(MyContext);

    useEffect(() => {
        console.log(listNotes)
    }, [])

    const saveNote = () => {
        if (textNote.length > 0) {
            setListNotas((prevState) => [...prevState, { id: listNotes.length, text: textNote } ]);
            setTextNote("");
            navigation.navigate('Home');
        }
    }

    return (
        <View>
            <Button onPress={saveNote} title="Salvar"></Button>
            <TextInput
                style={styles.styleTextInput}
                multiline={true}
                numberOfLines={5}
                value={textNote}
                onChangeText={(text) => setTextNote(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    styleTextInput: {
    }
})