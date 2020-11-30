import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
import * as Animatable from 'react-native-animatable';
import * as Progress from "react-native-progress";

const Plan = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/bg.png")} style={[Style.container,{justifyContent:"center",paddingHorizontal: 0,}]} >
            {/* <Animatable.View animation="zoomIn" easing="ease-out"  */}
            <View
              style={{flex:1,justifyContent:"space-around"}} >
                  <Text style={[Style.h3,{paddingLeft: 30,}]}>Goal Plan</Text>

 {/* ------------------------------------------Rows start------------------------------------------------------- */}
            <Animatable.View animation="zoomIn" easing="ease-out" style={{height:"40%",justifyContent:"space-between"}} >
                  <View style={styles.row}>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/mortarboard-1.png")} />
                            <Text style={[Style.textsm,{width:60}]}>Education</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                            <Image source={require("../assets/medical-1.png")} />
                            <Text style={[Style.textsm,{width:60}]}> Medical Expenses</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/increase.png")} />
                            <Text style={[Style.textsm,{width:60}]}>Everyday Expenses</Text>
                        </View>
                  </View>

                  <View style={styles.row}>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/donation-1.png")} />
                            <Text style={[Style.textsm,{width:60}]}>Charity</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                            <Image source={require("../assets/car-1.png")} />
                            <Text style={[Style.textsm,{width:60}]}> Car</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/sun-umbrella-1.png")} />
                            <Text style={[Style.textsm,{width:60}]}>Vacation</Text>
                        </View>
                  </View>
                  <View style={styles.row}>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/home-1.png")} />
                            <Text style={[Style.textsm,{width:60}]}>Home</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                            <Image source={require("../assets/idea-1.png")} />
                            <Text style={[Style.textsm,{width:60}]}> Others</Text>
                        </View>
                  </View>
                  </Animatable.View>
    {/* -------------------------------------Rows End------------------------------------------------------------ */}

    <Text style={[Style.h3,{paddingLeft: 30,}]}>Progress This Month</Text>

{/* ------------------------------------------Rows start------------------------------------------------------- */}
        <Animatable.View animation="zoomIn" easing="ease-out" style={{height:"40%",justifyContent:"space-between"}} >
                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/mortarboard-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}>20%</Text>
                           <Progress.Bar progress={0.2} width={40} color="white" />
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/medical-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}> 5%</Text>
                           <Progress.Bar progress={0.05} width={40} color="white" />
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/increase.png")} />
                           <Text style={[Style.textsm,{width:60}]}>10%</Text>
                           <Progress.Bar progress={0.1} width={40} color="white" />
                       </View>
                 </View>

                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/donation-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}>8%</Text>
                           <Progress.Bar progress={0.8} width={40} color="white" />
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/car-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}> 7.5%</Text>
                           <Progress.Bar progress={0.75} width={40} color="white" />
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/sun-umbrella-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}>2.5%</Text>
                           <Progress.Bar progress={0.025} width={40} color="white" />
                       </View>
                 </View>
                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/home-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}>30%</Text>
                           <Progress.Bar progress={0.3} width={40} color="white" />
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/idea-1.png")} />
                           <Text style={[Style.textsm,{width:60,}]}> 3%</Text>
                           <Progress.Bar progress={0.03} width={40} color="white" />
                       </View>
                       {/* <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                            <ImageBackground style={{width:170,height:170}} source={require("../assets/test.gif")}>

                            </ImageBackground>
                       </View> */}
                 </View>
                 </Animatable.View>
                  {/* -------------------------------------Rows End------------------------------------------------------------ */}
            </View>
        </ImageBackground>
    )
}

export default Plan

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
     
    },

})
