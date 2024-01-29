import React from "react";
import {SafeAreaView,View,StyleSheet,Text} from "react-native";
import Button from "../components/Button";
function MemberResult ({route, navigation}){

    const {user} = route.params;

    function goToWelcome(){
        navigation.navigate("WelcomeScreen");
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.message}>Kayıt Tamamlandı</Text>
            <Text style={styles.label}>Üye Adı: {user.userName}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurName}</Text>
            <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
            <Text style={styles.label}>Üye Memleketi: {user.userHomeTown}</Text>
            <Button 
                text="Başlangınca Geri Dön"
                onPress={goToWelcome}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label:{
        fontWeight:"bold",
        fontSize:20,
        margin:5
    },
    message:{
        fontWeight:"bold",
        color:"black",
        fontSize:50,
        textAlign:"center",
        marginBottom:20
    }
})

export default MemberResult;