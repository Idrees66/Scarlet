import React,{useState} from 'react'
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";


const Individual_Menu = ({navigation}) => {
  const [name, setname] = useState("John")
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,{justifyContent:"center"}]} >
              <View style={{flex:4,justifyContent:"center"}} >
              <ImageBackground source={require("../assets/logo.png")} style={{width:w/2.5,height:w/2.5,alignItems:'center',alignSelf: 'center',justifyContent:"center"}}>
              <Image source={require("../assets/img.png")} style={{width:w/3.3,height:w/3.3}} />
            </ImageBackground>
            <Animatable.View animation="slideInLeft" easing="ease-out">
                    <Text style={{color:"white",fontSize:22,fontWeight:"bold",paddingTop:20}}>Welcome</Text>
                    <Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>{name}..!!</Text>
                </Animatable.View>
              <View style={{paddingTop:"10%",justifyContent:"space-around",height:250,flex:1,flexDirection:"row"}}>
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
               
              <ImageBackground source={require("../assets/logo.png")} style={styles.menu}>
               <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("Map")}>
                    <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",color:"teal"}}>Send</Text>
                </TouchableOpacity>
                </ImageBackground>
              {/* </Animatable.View> */}
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
              <ImageBackground source={require("../assets/logo.png")} style={styles.menu}>
                  <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("Bank_Detail")}>
                      <Text style={{fontWeight:"bold",fontSize:18,color:"teal",textAlign:"center"}}>Recieve</Text>
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
              <View style={{paddingTop:"20%",justifyContent:"space-around",height:250,flex:1,flexDirection:"row"}}>
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
              <ImageBackground source={require("../assets/logo.png")} style={styles.menu}>
                  <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("CustomerViews")}>
                      <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",color:"teal"}}>History</Text>
                  </TouchableOpacity>
                  </ImageBackground>
              {/* </Animatable.View>
              <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
                   <ImageBackground source={require("../assets/logo.png")} style={styles.menu}>
                    <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("Bank_Detail")}>
                      <Text style={{fontWeight:"bold",fontSize:18,color:"teal"}}>Wallet</Text>
                  </TouchableOpacity>
                  </ImageBackground>
              {/* </Animatable.View> */}
              </View>
              <View style={{paddingTop:"20%",paddingBottom:"15%",justifyContent:"space-around",height:250,flex:1,flexDirection:"row"}}>
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
              <ImageBackground source={require("../assets/logo.png")} style={styles.menu}>
                  <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("Employe_Account")}>
                      <Text style={{fontWeight:"bold",fontSize:18,color:"teal"}}>Profile</Text>
                  </TouchableOpacity>
                </ImageBackground>  
              {/* </Animatable.View> */}
              {/* <Animatable.View  animation="pulse" easing="ease-out" iterationCount='infinite'> */}
                <ImageBackground source={require("../assets/logo.png")} style={styles.menu}>
                    <TouchableOpacity style={styles.menuitem} onPress={()=>navigation.navigate("Plan")}>
                      <Text style={{fontWeight:"bold",fontSize:19,color:"teal"}}>Goals</Text>
                  </TouchableOpacity>
                </ImageBackground>
              {/* </Animatable.View> */}
              </View>
                 {/* <Animatable.View style={{paddingTop:"15%"}}  animation="pulse" easing="ease-out" iterationCount='infinite' iterationDelay={500}> */}
                <Button text="DashBoard" size="medium" onPress={()=>navigation.navigate("Employ_Dashboard")} />
                {/* </Animatable.View> */}
            </View>
            <View style={{flex:0}} />
        </ImageBackground>
    )
}

export default Individual_Menu

const w = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    menuitem:{
        backgroundColor:"white",
        width:70,
        height:70,
        // width:w/3.5,
        // height:w/4,
        justifyContent:"center",
        alignItems: 'center',
        // elevation:10,
        borderRadius:30,
        // borderRightWidth:5,
        // borderLeftWidth:5,
        // borderColor:"teal"
    },
    menu:{
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:"center"
    }
})
