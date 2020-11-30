import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
import * as Animatable from 'react-native-animatable';

const Social = ({source,style})=>(
    <TouchableOpacity>
         <Image source={source}  style={style}  />
    </TouchableOpacity>
)


const SignUp_Individual = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/bg.png")} style={[Style.container,]} >
       <View style={{flex:1,justifyContent:"space-between",}} >
            <Animatable.Text  animation="slideInLeft" easing="ease-out"  style={[Style.h1,{width:160,}]}>Create Your Account</Animatable.Text>
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

            <Animatable.View  animation="zoomIn" easing="ease-out" duration={2000}   style={{width:"90%",alignSelf: 'center',}}>
            <Button text="NEXT" size="large"  />
            <Text style={{alignSelf: 'center', color:"white"}} >or create with</Text>
                <View style={{backgroundColor:"rgba(255,255,255,0.2)",flexDirection: 'row', width:"100%",padding:10,borderRadius:15 ,justifyContent:"space-around"}}>
                    <Social source={require("../assets/instagram.png")} style={Style.social}  />
                    <Social source={require("../assets/twitter.png")} style={Style.social}   />
                    <Social source={require("../assets/linkedin.png")} style={Style.social}  />
                    <Social source={require("../assets/facebook.png")} style={Style.social} />
                    <Social source={require("../assets/paypal.png")} style={{height:20}}  />
                </View>
                <View style={{backgroundColor:"rgba(255,255,255,0.2)",flexDirection: 'row', width:"60%",padding:10,borderRadius:15,marginTop:5,justifyContent:"space-around",alignSelf:"center"}}>
                    <Social source={require("../assets/Gpay.png")} style={{width:50}}  />
                    <Social source={require("../assets/applePay.png")} style={{width:50}}   />
                </View>
            </Animatable.View>

            <Animatable.View  animation="fadeIn" easing="ease-out" duration={3000} delay={500} >
            <Text style={{alignSelf: 'center', color:"white"}} >Already have an account?</Text>
            <Button text="SIGN IN" size="small" />
            <Text style={{alignSelf: 'center', color:"white"}}>$2.99 per month </Text>

            
            </Animatable.View>
            </View>
        </ImageBackground>
    )
}

export default SignUp_Individual

const styles = StyleSheet.create({})
