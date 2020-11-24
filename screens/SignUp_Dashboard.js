import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";


const SignUP_Dashboard = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/bg.png")} style={[Style.container,{justifyContent:"center"}]} >
              <View style={{flex:4,justifyContent:"center"}} >
              <Animatable.Image   animation="pulse" easing="ease-out" iterationCount="infinite"
              source={require("../assets/logo.png")} style={{width:"50%",alignSelf: 'center'}} />
              <View style={{paddingTop:30,justifyContent:"space-around",height:200}}>
                <Button text="Individual" size="large" onPress={()=>navigation.navigate("SignUp_Individual")}  />
                <Button text="With Company" size="large" onPress={()=>navigation.navigate("SignUp")} />
              </View>
            </View>
            <View style={{flex:1}} />
        </ImageBackground>
    )
}

export default SignUP_Dashboard

const styles = StyleSheet.create({})
