import React from 'react'
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
// import Image from 'react-native-scalable-image';

const Welcome = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,{justifyContent:"center"}]} >
              <View style={{flex:4,justifyContent:"space-around"}} >
                

              <View style={{alignItems:"center",marginTop:"10%"}}>
                  <Animatable.Text animation="slideInLeft" easing="ease-out" duration={3000} delay={500}   style={{color:"white",fontSize:20,fontWeight:"bold"}}>Welcome to Goal!</Animatable.Text>
                  <Animatable.Text  animation="slideInRight" easing="ease-out" duration={3000} delay={500}  style={{color:"white",fontSize:20,fontWeight:"bold"}}>Give. Work. Share. Earn</Animatable.Text>
              </View>

              <View>
                  <TouchableOpacity style={styles.LoginSocial}>
                    <Image source={require("../assets/google.png")} style={styles.social}  />
                    <Text style={{color:"white",fontSize:16}}>Sign In with Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.LoginSocial}>
                    <Image source={require("../assets/apple.png")} style={styles.social}  />
                    <Text style={{color:"white",fontSize:16}}>Sign In with Apple</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.LoginSocial} >
                    <Image source={require("../assets/email.png")} style={styles.social}  />
                    <Text style={{color:"white",fontSize:16}}>Sign In with Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.LoginSocial} onPress={()=>navigation.navigate("SignUp_Company")}  >
                    <Image source={require("../assets/businessman.png")} style={styles.social}  />
                    <Text style={{color:"white",fontSize:16}}>Sign In with Company</Text>
                  </TouchableOpacity>
              </View>
              <Animatable.Image   animation="pulse" easing="ease-out" iterationCount="infinite"
              source={require("../assets/logo.png")}  style={{width:w/4,height:w/4 ,alignSelf: 'center'}}  />
                 <Animatable.Text animation="slideInLeft" easing="ease-out" duration={3000} delay={500}   style={{alignSelf:"center",color:"white",fontSize:16,fontWeight:"bold"}}>Gratuity On Another Level</Animatable.Text>
               <View style={{alignItems: 'center',}}>
               <TouchableOpacity onPress={()=>navigation.navigate("SignUP_Dashboard")}>
               <Animatable.Text  animation="pulse" easing="ease-out" iterationCount='infinite' 
               style={{color:"white",fontSize:17,fontWeight:"bold"}} >Click Here</Animatable.Text>
               </TouchableOpacity>
               <Text style={{color:"white",fontSize:15}} >to create your account</Text>
               </View>
               
                {/* <Animatable.View  animation="fadeIn" easing="ease-out" duration={3000} 
               style={{paddingTop:30,justifyContent:"space-around",height:200}}>
                <Button text="Welcome" size="medium" onPress={()=>navigation.navigate("Map")}  />
                <Button text="RECIEVE A TIP" size="medium" onPress={()=>navigation.navigate("SignIn")} />
              </Animatable.View> */}
            </View>
            <View style={{flex:0.5}} />
        </ImageBackground>
    )
}

export default Welcome
const w = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    LoginSocial:{
        backgroundColor:"rgba(255,255,255,0.5)",
        width:"80%",height:60,
        flexDirection:"row",
        alignItems: 'center', 
        justifyContent:"space-around",alignSelf: 'center',
        borderRadius:10,
        marginTop:10,
    },
    social:{
        width:30,
        height:30,
    },
})


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