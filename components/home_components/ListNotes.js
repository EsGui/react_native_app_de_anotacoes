import { useContext } from "react";
import { View, Button, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import MyContext from "../../contextApi/MyContext";

export default function ListNotes({ navigation }) {
    const {
        listNotes,
        openNote,
        createNote,
        setEditNote,
    } = useContext(MyContext);

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
                        <TouchableOpacity key={index} onPress={() => {
                            openNote(id);
                            setEditNote(true);
                            navigation.navigate("Create")
                        } } style={styles.myNotes}>
                            <Text>{ text }</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    myNotes: {
        borderWidth: 1,
        padding: 20
    }
})