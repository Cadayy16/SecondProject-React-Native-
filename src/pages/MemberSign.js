import React, { useState } from "react";
import {SafeAreaView,Alert} from "react-native";
import Input from "../components/Input"
import Button from "../components/Button";


function MemberSign({navigation}){

    const [userName, setUserName] = useState(null);
    const [userSurName, setUserSurName] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHomeTown, setUserHomeTown] = useState(null);

    function handleSubmit(){
        if(!userName || !userSurName || !userAge || !userMail || !userHomeTown){
            Alert.alert("Kebap Fitness Salonu", "Bilgiler boş bırakılamaz");
            return;
        };
        const user = {
            userName,
            userSurName,
            userAge,
            userMail,
            userHomeTown,
        };  

        navigation.navigate("MemberResultScreen", {user});
    };

    return(
        <SafeAreaView>
            <Input 
            label="Üye Adı" 
            placeholder="Üye ismini giriniz..." 
            onChangeText={setUserName}
            />

            <Input 
            label="Üye Soyadı" 
            placeholder="Üye soyismini giriniz..."
            onChangeText={setUserSurName}
            />

            <Input 
            label="Üye Yaş" 
            placeholder="Üye yaşını giriniz..." 
            onChangeText={setUserAge}
            />

            <Input 
            label="Üye E-posta" 
            placeholder="Üye e-posta adresini giriniz..." 
            onChangeText={setUserMail}
            />

            <Input 
            label="Üye Memleketi" 
            placeholder="Üye memleketi giriniz..." 
            onChangeText={setUserHomeTown}
            />

            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberSign;