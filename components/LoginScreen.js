import React from "react";
import { View, Text, Button } from "react-native";
import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
}


