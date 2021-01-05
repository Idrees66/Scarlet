import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Create_Company = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,]} >
       <View style={{justifyContent:"space-around",height:"85%"}} >
            <Text style={[Style.h1,{width:160,}]}>Create  Company</Text>
            <KeyboardAvoidingView behavior="padding" 
             style={{width:"90%",alignSelf: 'center',}}>
                <View style={Style.inputContainer}>
                <TextInput placeholder="Company Name" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
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
                <TextInput placeholder="Address" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />

                </View>

                <View style={Style.inputContainer}>
                <TextInput placeholder="Industry" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />

                </View>
            </KeyboardAvoidingView>

            <View style={{width:"90%",alignSelf: 'center',}}>
            <Button text="Create Company" size="large" />
            </View>


            </View>
        </ImageBackground>
    )
}

export default Create_Company

const styles = StyleSheet.create({})
