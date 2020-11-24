import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Social = ({source})=>(
    <TouchableOpacity>
         <Image source={source}  />
    </TouchableOpacity>
)


const SignUp_Individual = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/bg.png")} style={[Style.container,]} >
       <View style={{flex:1,justifyContent:"space-between",}} >
            <Text style={[Style.h1,{width:160,}]}>Create Your Account</Text>
            <KeyboardAvoidingView behavior="padding" 
             style={{width:"90%",alignSelf: 'center',}}>
                <View style={Style.inputContainer}>
                <TextInput placeholder="Name" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
                <Image source={require("../assets/un.png")} style={{width:20,height:20,alignSelf: 'center',}} />
                </View>
           
                <View style={Style.inputContainer}>
                <TextInput placeholder="Email" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
                <Image source={require("../assets/email.png")} style={{width:20,height:20,alignSelf: 'center',}} resizeMode="contain" />
                </View>

                <View style={Style.inputContainer}>
                <TextInput placeholder="Phone Number" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
                <Image source={require("../assets/phone-call.png")} style={{width:20,height:20,alignSelf: 'center',}} resizeMode="contain" />
                </View>

                <View style={Style.inputContainer}>
                <TextInput placeholder="Password" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
                <Image source={require("../assets/padlock.png")} style={{width:20,height:20,alignSelf: 'center',}}  resizeMode="contain" />
                </View>

                <View style={Style.inputContainer}>
                <TextInput placeholder="Confirm Password" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
                <Image source={require("../assets/padlock.png")} style={{width:15,height:20,alignSelf: 'center',}}  resizeMode="contain"  />
                </View>
            </KeyboardAvoidingView>

            <View style={{width:"90%",alignSelf: 'center',}}>
            <Button text="NEXT" size="large" onPress={()=>navigation.navigate("SignUp")} />
            <Text style={{alignSelf: 'center', color:"white"}} >or</Text>
                <View style={{backgroundColor:"rgba(255,255,255,0.3)",flexDirection: 'row', width:"100%",padding:10,borderRadius:15 ,justifyContent:"space-around"}}>
                    <Social source={require("../assets/instagram.png")} />
                    <Social source={require("../assets/twitter.png")} />
                    <Social source={require("../assets/linkedin.png")} />
                    <Social source={require("../assets/facebook.png")} />
                    <Social source={require("../assets/paypal.png")} />


                </View>
            </View>

            <View >
            <Text style={{alignSelf: 'center', color:"white"}} >Already have an account?</Text>
            <Button text="SIGN IN" size="small" />
            <Text style={{alignSelf: 'center', color:"white"}}>$2.99 per month </Text>

            
            </View>
            </View>
        </ImageBackground>
    )
}

export default SignUp_Individual

const styles = StyleSheet.create({})
