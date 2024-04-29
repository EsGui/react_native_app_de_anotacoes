import { useContext } from "react";
import { View, Button, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MyContext from "../../contextApi/MyContext";

export default function ListNotes({ navigation }) {
    const {
        listNotes,
        setListNotas,
        openNote,
        createNote,
        setEditNote,
    } = useContext(MyContext);

    const deleteNote = (noteId) => {
        const newListNotes = listNotes.filter((element) => Number(element.id) != Number(noteId));
        setListNotas(newListNotes);
    }

    return (
        <View>
            <View>
                <Button onPress={() => {
                    createNote();
                    setEditNote(false);
                    navigation.navigate('Create');
                }} title="CRIAR NOTA"></Button>
            </View>
            <ScrollView>
                {
                    listNotes.map(({ id, text }, index) => (
                        <View style={styles.myNotes}>
                            <TouchableOpacity key={index} 
                            onPress={() => {
                                openNote(id);
                                setEditNote(true);
                                navigation.navigate("Create")
                            } }>
                                <Text>{ text }</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteNote(id)}>
                                <Ionicons name="remove" size={32} color="black" />
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    myNotes: {
        borderWidth: 1,
        padding: 20,
        maxHeight: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }
})