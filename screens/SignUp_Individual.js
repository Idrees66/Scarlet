import React,{ useState,useEffect } from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
import * as Animatable from 'react-native-animatable';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Dimensions } from 'react-native';
import { Alert } from 'react-native';


const Social = ({source,style})=>(
    <TouchableOpacity>
         <Image source={source}  style={style}  />
    </TouchableOpacity>
)


const SignUp_Individual = ({navigation}) => {
    const [accountType, setaccountType] = useState("")

    useEffect(() => {
        Alert.alert("","By joining as an Individual you will have the capability to send & receive funds, track history & data analytics, and share users profiles.")
    }, [])

    // function handleLocationReq(value){

    //     if(value=="Individual"){    
    //         setaccountType("Individual")
    //         Alert.alert("","By joining as an Individual you will have the capability to send & receive funds, track history & data analytics, and share users profiles.")
    //     }
    //     else {    
    //         setaccountType("Supporter")
    //         Alert.alert("","By joining as a Supporter you will have the capability to send funds, track your history, & share users profiles.")
           
    //     }
    // }
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,]} >
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
            <Button text="NEXT" size="large" onPress={()=>Alert.alert("","Join as an Individual. Give, Work, Share, and Earn.")} />
            
           {/* <View style={{alignItems:"center",justifyContent: 'center',}}>
                <RadioForm
                        radio_props={[
                            {label: "Individual", value: "Individual", },
                            {label: 'Supporter', value: 'Supporter'},
                            
                        ]}
                        initial={null}
                        formHorizontal={true}
                        animation={true}
                        buttonSize={7}
                        buttonColor={"white"}
                        buttonOuterSize={20}
                        borderWidth={0.1}
                        labelWrapStyle={{backgroundColor: "yellow",border:2}}
                        labelStyle={{fontSize: 15, color: "white",fontStyle:"italic",width:Dimensions.get('window').width/2.5}}
                       // onPress={(value)=>console.log(value)}
                         onPress={(value) => {handleLocationReq(value)}}
           /> */}
            {/* <Text style={{alignSelf: 'center', color:"white"}} >or create with</Text>
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
                </View> */}
            </Animatable.View>

            <Animatable.View  animation="fadeIn" easing="ease-out" duration={3000} delay={500} >
            <Text style={{alignSelf: 'center', color:"white"}} >Already have an account?</Text>
            {/* {(accountType==="Supporter") ? ( <Button text="SIGN IN" size="small"  onPress={()=>navigation.navigate("Supporter_Menu")} />) : ( <Button text="SIGN IN" size="small"  onPress={()=>navigation.navigate("Individual_Menu")} />) } */}
            <Button text="SIGN IN" size="small"  onPress={()=>navigation.navigate("Individual_Menu")} />
            <Text style={{alignSelf: 'center', color:"white"}}>$1.99 per month </Text>

            
            </Animatable.View>
            </View>
        </ImageBackground>
    )
}

export default SignUp_Individual

const styles = StyleSheet.create({})
