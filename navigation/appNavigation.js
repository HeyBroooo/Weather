import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen";
import { LogBox, Text, View } from "react-native";

const Stack = createStackNavigator();

LogBox.ignoreLogs(['non-serializable values were found in the navigation state']);

export default function AppNavigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" option={{headerShown: false}}> component={HomeScreen} </Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    );
    }