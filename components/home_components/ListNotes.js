import { useContext } from "react";
import { View, Button, ScrollView, Text } from "react-native";
import MyContext from "../../contextApi/MyContext";

export default function ListNotes({ navigation }) {
    const {
        listNotes
    } = useContext(MyContext)

    return (
        <View>
            <View>
                <Button onPress={() => navigation.navigate('Create')} title="CRIAR NOTA"></Button>
            </View>
            <ScrollView>
                {
                    listNotes.map(({ text }) => (
                        <Text>{ text }</Text>
                    ))
                }
            </ScrollView>
        </View>
    )
}