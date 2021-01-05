import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
import * as Animatable from 'react-native-animatable';

const SignUp = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,]} >
       <Animatable.View animation="zoomIn" easing="ease-out" 
       style={{flex:1,justifyContent:"space-between",}} >
           <Animatable.View animation="slideInLeft" easing="ease-out" delay={500} >
                <Text style={[Style.h2,{width:"70%",}]}>Create Your </Text>
                <Text style={[Style.h1,{width:"80%",fontWeight:"bold"}]}>Company Account</Text>
           </Animatable.View>
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
            <Button text="NEXT" size="medium" onPress={()=>navigation.navigate("SignUp")} />
            </View>

            <View  >
            <Text style={{alignSelf: 'center', color:"white"}} >Already have an account?</Text>
            <Button text="SIGN IN" size="small" onPress={()=>navigation.navigate("Admin_Dashboard")}  />
            <Text style={{alignSelf: 'center', color:"white"}}>Monthly Subscription $25USD </Text>
            <Text style={{alignSelf: 'center', color:"white"}}>and $2USD per Employee</Text>
            
            </View>
            </Animatable.View>
        </ImageBackground>
    )
}

export default SignUp

const styles = StyleSheet.create({})
