import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
// import Image from 'react-native-scalable-image';

const Dashboard = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,{justifyContent:"center"}]} >
              <View style={{flex:4,justifyContent:"center"}} >
                
              <Animatable.Image   animation="pulse" easing="ease-out" iterationCount="infinite"
              source={require("../assets/logo.png")}  style={{width:"50%",alignSelf: 'center'}}  />
              <View style={{alignItems:"center",marginTop:"10%"}}>
                  <Animatable.Text animation="slideInRight" easing="ease-out" duration={3000} delay={500}   style={{color:"white",fontSize:16,fontWeight:"bold"}}>Gratuity On Another Level</Animatable.Text>
                  <Animatable.Text  animation="slideInLeft" easing="ease-out" duration={3000} delay={500}  style={{color:"white",fontSize:16,fontWeight:"bold"}}>Give. Work. Share. Earn</Animatable.Text>
              </View>
                <Animatable.View  animation="fadeIn" easing="ease-out" duration={3000} 
               style={{paddingTop:30,justifyContent:"space-around",height:200}}>
                <Button text="SEND A TIP" size="medium" onPress={()=>navigation.navigate("Map")}  />
                <Button text="RECIEVE A TIP" size="medium" onPress={()=>navigation.navigate("SignIn")} />
              </Animatable.View>
            </View>
            <View style={{flex:1}} />
        </ImageBackground>
    )
}

export default Dashboard

const styles = StyleSheet.create({})


{/* <View style={{flexDirection:"row",justifyContent:"space-between"}} >
<View style={[Style.inputContainer,{width:"50%"}]}>
    <View style={{paddingTop:15,}}>
    <Image source={require("../assets/credit-card.png")} style={{width:20,height:20}}  resizeMode="contain"  />
    </View>
    <TextInput placeholder="Expiry Date" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
</View>
<View style={[Style.inputContainer,{width:"40%"}]}>
    <View style={{paddingTop:15,}}>
    <Image source={require("../assets/padlock.png")} style={{width:20,height:20}}  resizeMode="contain"  />
    </View>
    <TextInput placeholder="Code" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
</View>
</View> */}