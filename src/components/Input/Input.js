import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,

  } from 'react-native';

  import styles from "./Input.styles";

  function Input({label, placeholder, onChangeText}){
    return(
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
    )
  }


export default Input;