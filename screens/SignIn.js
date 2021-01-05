import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
// import { SliderBox } from "react-native-image-slider-box";

const view = <Text style={{ flex: 1, fontSize: 16, color:"white" }}>Gratuity On Another Level </Text>
const view2 = <Text style={{ flex: 1, fontSize: 16, color:"white" }}>Give.Work.Share.Earn. </Text>
 

const SignIn = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[styles.container,{justifyContent:"space-between"}]} >
           <Animatable.View animation="fadeInLeft" easing="ease-out" >
            <Text style={[Style.h1,{width:"60%"}]}>Hello, </Text>
            <Text style={[Style.h1,{width:"80%"}]}>Welcome to Goal.!!</Text>
            </Animatable.View>
            <Animatable.Image  animation="pulse" easing="ease-out" iterationCount="infinite"
             source={require("../assets/logo.png")} style={{width:"50%",alignSelf: 'center',}} />

        {/* <SliderBox
             images={["svfdsbfnb","sfvdsbv"]}
             resizeMode="contain"
            //  ImageComponentStyle={{width:40,height:40}}
            // dotStyle={{marginTop:0}}
             /> */}

            <Animatable.View animation="zoomIn" easing="ease-out" 
             style={{width:"80%",alignSelf: 'center',}}>
                <TextInput placeholder="Email" style={styles.textInput} placeholderTextColor="white" />
                <TextInput placeholder="Password" style={styles.textInput} placeholderTextColor="white" />
            </Animatable.View>

            <Animatable.View  animation="fadeIn" easing="ease-out" duration={3000} 
             style={{width:"80%",alignSelf: 'center',}}>
            <Button text="SIGN IN" size="large" onPress={()=> navigation.navigate("Admin_Dashboard") } />
            <Text style={{alignSelf: 'center', color:"white",textAlign:"center",paddingBottom:5}} >By continuing, you agree to our User Agreement and Privacy Policy.</Text>
            <Text style={{alignSelf: 'center', color:"white"}} >Forgot password?</Text>
            </Animatable.View>

            <Animatable.View  animation="fadeIn" easing="ease-out" duration={2000} delay={500} >
            <Text style={{alignSelf: 'center', color:"white"}} >Don't have an account?</Text>
            <Button text="Create" size="small" onPress={()=>navigation.navigate("SignUP_Dashboard")} />
            </Animatable.View>
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
