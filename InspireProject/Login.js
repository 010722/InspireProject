import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Button,
  } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";

const Login = ({ navigation }) => {
    return (
        <Button
            title={"Home"}
            onPress={() => {
            navigation.navigate("Home");
        }}
        ></Button>
    );
};