import { View, Button, ScrollView } from "react-native";

export default function ListNotes({ navigation }) {
    return (
        <View>
            <View>
                <Button onPress={() => navigation.navigate('Create')} title="CRIAR NOTA"></Button>
            </View>
            <ScrollView>

            </ScrollView>
        </View>
    )
}