import React from "react";
import Home from "./src/screens/Home";
import PesquisarProduto from "./src/screens/PesquisaProduto";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./src/screens/Profile";


const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} 
        options={{ headerShown: false}} />

        <Stack.Screen name='Profile' component={Profile} 
        options={{ headerShown: false}} />

        <Stack.Screen name='PesquisarProduto' component={PesquisarProduto} 
        options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;