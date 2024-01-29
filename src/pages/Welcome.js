import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

import Button from "../components/Button"

function Welcome ({navigation}) {

    function goToMemberSign(){
        navigation.navigate("MemberSignScreen");
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button 
                text="Üye Kaydı Oluştur"
                onPress={goToMemberSign}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    header:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"black",
        margin:10,
    },
})

export default Welcome;