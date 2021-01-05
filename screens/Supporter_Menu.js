import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";


const Supporter_Menu = ({navigation}) => {
    const [name, setname] = useState("John")
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,{justifyContent:"center"}]} >
              
              <View style={{flex:4,justifyContent:"center"}} >
              <ImageBackground source={require("../assets/logo.png")} style={{width:w/2,height:w/2,alignItems:'center',alignSelf: 'center',justifyContent:"center"}}>
              <Image source={require("../assets/img.png")} style={{width:w/2.6,height:w/2.6}} />
            </ImageBackground>
            <View style={{width:"80%",marginTop:20}}>
                <Animatable.View animation="slideInLeft" easing="ease-out">
                    <Text style={{color:"white",fontSize:22,fontWeight:"bold",paddingTop:20}}>Welcome</Text>
                    <Text style={{color:"white",fontSize:22,fontWeight:"bold",paddingBottom:20}}>{name}..!!</Text>
                    <TouchableOpacity style={{borderWidth:1,borderRadius:10,borderColor:"white",width:70,alignItems:"center" }}>
                        <Text style={{color:"white",fontSize:11,padding:3}}>UPGRADE</Text>
                    </TouchableOpacity>
                </Animatable.View>
            {/* <Animatable.Text  animation="slideInLeft" easing="ease-out" style={{color:"white",fontSize:22,fontWeight:"bold",width:"70%",paddingTop:20}}>Welcome    {name}..!! </Animatable.Text> */}
            {/* <Animatable.Text  animation="fadeIn" delay={1000} easing="ease-out" style={{color:"white",fontSize:16,fontWeight:"bold",width:"100%",paddingTop:20}}>Select your type of account below?</Animatable.Text> */}
            </View>
              <View style={{paddingTop:30,justifyContent:"space-around",height:250,flex:1,flexDirection:"row"}}>
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
                <ImageBackground source={require("../assets/logo.png")} style={{width:100,height:100,alignItems:'center',justifyContent:"center"}}>
                  <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("Map")}>
                      <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",color:"teal"}}>Send</Text>
                  </TouchableOpacity>
                </ImageBackground>
              {/* </Animatable.View> */}
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
              <ImageBackground source={require("../assets/logo.png")} style={{width:100,height:100,alignItems:'center',justifyContent:"center"}}>
                  <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("Employe_Account")}>
                      <Text style={{fontWeight:"bold",fontSize:20,color:"teal"}}>Profile</Text>
                  </TouchableOpacity>
                  </ImageBackground>
              {/* </Animatable.View> */}
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'>
                <Button text="Profile" size="medium" onPress={()=>navigation.navigate("Employe_Account")}  />
                </Animatable.View>
                <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite' iterationDelay={500}>
                <Button text="Past Recieve" size="medium" onPress={()=>navigation.navigate("CustomerViews")} />
                </Animatable.View>
                <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite' iterationDelay={500}>
                <Button text="Send a Tip" size="medium" onPress={()=>navigation.navigate("Map")} />
                </Animatable.View> */}
              </View>
              <View style={{paddingTop:0,justifyContent:"space-around",height:250,flex:1,flexDirection:"row"}}>
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
              <ImageBackground source={require("../assets/logo.png")} style={{width:100,height:100,alignItems:'center',justifyContent:"center"}}>
                  <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("CustomerViews")}>
                      <Text style={{fontWeight:"bold",fontSize:17,textAlign:"center",color:"teal"}}>History</Text>
                  </TouchableOpacity>
                  </ImageBackground>
              {/* </Animatable.View> */}
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
              <ImageBackground source={require("../assets/logo.png")} style={{width:100,height:100,alignItems:'center',justifyContent:"center"}}>
                  <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("Bank_Detail")}>
                      <Text style={{fontWeight:"bold",fontSize:20,color:"teal"}}>Wallet</Text>
                  </TouchableOpacity>
                  </ImageBackground>
              {/* </Animatable.View> */}
              </View>
            </View>
            <View style={{flex:1}} />
        </ImageBackground>
    )
}

export default Supporter_Menu

const w = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    menuitem:{
        backgroundColor:"white",
        width:70,
        height:70,
        justifyContent:"center",
        alignItems: 'center',
        // elevation:10,
         borderRadius:30,
        // borderRightWidth:5,
        // borderLeftWidth:5,
        // borderColor:"teal"
    }
})
