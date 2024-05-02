import React from "react";
import Home from "./src/screens/Home";
import PesquisarProduto from "./src/screens/PesquisaProduto";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;