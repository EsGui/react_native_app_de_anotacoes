import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListNotes from "./components/home_components/ListNotes";
import Logic from "./contextApi/Logic";
import CreateNotes from "./components/create_components/CreateNote";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Logic>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ListNotes} />
          <Stack.Screen name="Create" component={CreateNotes} />
        </Stack.Navigator>
      </NavigationContainer>
    </Logic>
  );
}
