import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";


const SignUP_Dashboard = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,{justifyContent:"center"}]} >
              <View style={{flex:4,justifyContent:"center"}} >
              <Animatable.Image animation="fadeIn" easing="ease-out" duration={3000}
              source={require("../assets/logo.png")} style={{width:"50%",alignSelf: 'center'}} />
            <View style={{width:"80%",marginTop:20}}>
            <Animatable.Text  animation="slideInLeft" easing="ease-out" style={{color:"white",fontSize:22,fontWeight:"bold",width:"70%",paddingTop:20}}>Let’s Get You Setup! </Animatable.Text>
            <Animatable.Text  animation="fadeIn" delay={1000} easing="ease-out" style={{color:"white",fontSize:16,fontWeight:"bold",width:"100%",paddingTop:20}}>Select your type of account below?</Animatable.Text>
            </View>
              <View style={{paddingTop:30,justifyContent:"space-around",height:200}}>

              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'>
                <Button text="Supporter" size="large" onPress={()=>navigation.navigate("SignUp_Individual")}  />
              </Animatable.View>
              <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'>
                <Button text="Individual" size="large" onPress={()=>navigation.navigate("SignUp_Individual")}  />
                </Animatable.View>
                <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite' iterationDelay={500}>
                <Button text="Company" size="large" onPress={()=>navigation.navigate("SignUp_Company")} />
                </Animatable.View> */}
              <Button text="Supporter" size="large" onPress={()=>navigation.navigate("SignUp_Supporter")}  />
              <Button text="Individual" size="large" onPress={()=>navigation.navigate("SignUp_Individual")}  />
              <Button text="Company" size="large" onPress={()=>navigation.navigate("SignUp_Company")} />
              </View>
            </View>
            <View style={{flex:1}} />
        </ImageBackground>
    )
}

export default SignUP_Dashboard

const styles = StyleSheet.create({})
