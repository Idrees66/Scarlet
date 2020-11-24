import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Bank_Detail = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/bg.png")} style={[Style.container,{justifyContent:"center"}]} >
              <View style={{flex:1,justifyContent:"space-around"}} >
                  <Text style={[Style.h1,{alignSelf:"center"}]}>Payment</Text>
                  <Text style={[Style.h2,]}>Payment Methods</Text>

                  <View style={{width:"100%",flexDirection:"row", justifyContent:"space-between",alignItems:"center" ,padding:10}}>
                        <View style={{flex:1,alignItems:"center"}}>
                        <Image source={require("../assets/payment.png")}  />
                        <Text style={[Style.text,{padding:10}]}>Credit Card</Text>
                        </View>
                        <Image source={require("../assets/Line.png")} />
                        <View style={{flex:1,alignItems:"center",}}>
                        <Image source={require("../assets/payment.png")}  />
                        <Text style={[Style.text,{padding:10}]}>Debit Card</Text>
                        </View>
                  </View>

                  <View>
                  <Text style={{ color:"white",paddingBottom:10}} >We also accept</Text>
                    <View style={{backgroundColor:"rgba(255,255,255,0.3)",flexDirection: 'row', width:"100%",padding:10,borderRadius:15 ,justifyContent:"space-around"}}>
                        <Image source={require("../assets/Gpay.png")}  />
                        <Image source={require("../assets/applePay.png")}  />
                        <Image source={require("../assets/paypal.png")}  />
                    </View>
                  </View>

                <View>
                    <View style={Style.inputContainer}>
                        <View style={{paddingTop:15,}}>
                        <Image source={require("../assets/credit-card.png")} style={{width:20,height:20}}  resizeMode="contain"  />
                        </View>
                         <TextInput placeholder="Account Number" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
                    </View>
                    <View style={[Style.inputContainer,{width:"70%"}]}>
                        <View style={{paddingTop:15,}}>
                        <Image source={require("../assets/username.png")} style={{width:20,height:20}}  resizeMode="contain"  />
                        </View>
                         <TextInput placeholder="Name" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="white" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}} >
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
                    </View>
                        

                </View>

                <Button text="Verify" size="medium" onPress={()=>navigation.navigate("Plan")} />
              </View>
        </ImageBackground>
    )
}

export default Bank_Detail

const styles = StyleSheet.create({})
