import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const SignIn = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/bg.png")} style={[styles.container,{justifyContent:"space-between"}]} >
            <Text style={[Style.h1,{width:82}]}>Hello, Sign In</Text>
            <Image source={require("../assets/logo.png")} style={{width:"50%",alignSelf: 'center',}} />

            <View style={{width:"90%",alignSelf: 'center',}}>
                <TextInput placeholder="Email" style={styles.textInput} placeholderTextColor="white" />
                <TextInput placeholder="Password" style={styles.textInput} placeholderTextColor="white" />
            </View>

            <View style={{width:"90%",alignSelf: 'center',}}>
            <Button text="SIGN IN" size="large" onPress={()=>navigation.navigate("SignUp")} />
            <Text style={{alignSelf: 'center', color:"white"}} >Forgot password?</Text>
            </View>

            <View>
            <Text style={{alignSelf: 'center', color:"white"}} >Don't have an account?</Text>
            <Button text="Create" size="small" onPress={()=>navigation.navigate("SignUP_Dashboard")} />
            </View>
        </ImageBackground>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:30,
        paddingTop:30,
        paddingBottom:30,
    },
    textInput:{
        padding:10,
        color:"white",
        fontSize:16,
        borderBottomColor:"white",
        borderBottomWidth:1,
        marginTop:20,
    }
})
