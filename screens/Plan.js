import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
import * as Animatable from 'react-native-animatable';
import * as Progress from "react-native-progress";

const Plan = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[Style.container,{justifyContent:"center",paddingHorizontal: 0,}]} >
            {/* <Animatable.View animation="zoomIn" easing="ease-out"  */}
            <View
              style={{flex:1,justifyContent:"space-around"}} >
                  <Text style={[Style.h3,{paddingLeft: 30,}]}>Active Goals</Text>

 {/* ------------------------------------------Rows start------------------------------------------------------- */}
            <Animatable.View animation="zoomIn" easing="ease-out" style={{height:"45%",justifyContent:"space-between"}} >
                  <View style={styles.row}>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/mortarboard-1.png")} />
                            <Text style={[Style.textsm,{width:60,paddingBottom:"5%",}]}>Education</Text>
                            <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent: "center", }} >
                                 <Progress.Bar progress={0.8} width={40} style={{alignSelf: 'center',}} color="white" />
                                 <Text style={[Style.textsm,{width:30,fontSize:11,paddingTop:0}]}>20%</Text>
                            </View>
     
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                            <Image source={require("../assets/medical-1.png")} />
                            <Text style={[Style.textsm,{width:60,paddingBottom:"5%",fontSize:11}]}> Medical Expenses</Text>
                            <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent: "center",  }} >
                                 <Progress.Bar progress={0.8} width={40} style={{alignSelf: 'center',}} color="white" />
                                 <Text style={[Style.textsm,{width:30,fontSize:11,paddingTop:0}]}>20%</Text>
                            </View>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/increase.png")} />
                            <Text style={[Style.textsm,{width:60,paddingBottom:"5%",fontSize:11}]}>Everyday Expenses</Text>
                            <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent: "center",}} >
                                 <Progress.Bar progress={0.8} width={40} style={{alignSelf: 'center',}} color="white" />
                                 <Text style={[Style.textsm,{width:30,fontSize:11,paddingTop:0}]}>20%</Text>
                            </View>
                        </View>
                  </View>

                  <View style={styles.row}>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/donation-1.png")} />
                            <Text style={[Style.textsm,{width:60,paddingBottom:"5%"}]}>Charity</Text>
                            <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent: "center",}} >
                                 <Progress.Bar progress={0.8} width={40} style={{alignSelf: 'center',}} color="white" />
                                 <Text style={[Style.textsm,{width:30,fontSize:11,paddingTop:0}]}>20%</Text>
                            </View>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                            <Image source={require("../assets/car-1.png")} />
                            <Text style={[Style.textsm,{width:60,paddingBottom:"5%"}]}> Car</Text>
                            <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent: "center",}} >
                                 <Progress.Bar progress={0.8} width={40} style={{alignSelf: 'center',}} color="white" />
                                 <Text style={[Style.textsm,{width:30,fontSize:11,paddingTop:0}]}>20%</Text>
                            </View>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/sun-umbrella-1.png")} />
                            <Text style={[Style.textsm,{width:60,paddingBottom:"5%"}]}>Vacation</Text>
                            <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent: "center",}} >
                                 <Progress.Bar progress={0.8} width={40} style={{alignSelf: 'center',}} color="white" />
                                 <Text style={[Style.textsm,{width:30,fontSize:11,paddingTop:0}]}>20%</Text>
                            </View>
                        </View>
                  </View>
                  <View style={styles.row}>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                            <Image source={require("../assets/home-1.png")} />
                            <Text style={[Style.textsm,{width:60,paddingBottom:"5%"}]}>Home</Text>
                            {/* <Text style={[Style.textsm,{width:60}]}>20%</Text> */}
                            <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent: "center",}} >
                                 <Progress.Bar progress={0.8} width={40} style={{alignSelf: 'center',}} color="white" />
                                 <Text style={[Style.textsm,{width:30,fontSize:11,paddingTop:0}]}>20%</Text>
                            </View>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                            <Image source={require("../assets/idea-1.png")} />
                            <Text style={[Style.textsm,{width:60,paddingBottom:"5%"}]}> Others</Text>
                            {/* <Text style={{width:60,color:"white",textAlign:'center'}}>20%</Text> */}
                            <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent: "center",}} >
                                 <Progress.Bar progress={0.8} width={40} style={{alignSelf: 'center',}} color="white" />
                                 <Text style={[Style.textsm,{width:30,fontSize:11,paddingTop:0}]}>20%</Text>
                            </View>
                        </View>
                  </View>
                  </Animatable.View>
    {/* -------------------------------------Rows End------------------------------------------------------------ */}

    <Text style={[Style.h3,{paddingLeft: 30,}]}>Completed Goals</Text>

{/* ------------------------------------------Rows start------------------------------------------------------- */}
        <Animatable.View animation="zoomIn" easing="ease-out" style={{height:"35%",justifyContent:"space-between"}} >
                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/mortarboard-1.png")} />
                           {/* <Text style={{color:"white",textAlign:'center',fontSize:11, paddingTop:"5%"}}> Total Earned</Text> */}
                           <Text style={{color:"white",textAlign:'center',fontSize:13, paddingTop:"1%",fontWeight:"bold"}}> $20</Text>
                           {/* <Text style={[Style.textsm,{width:60}]}>20%</Text>
                           <Progress.Bar progress={0.2} width={40} color="white" /> */}
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/medical-1.png")} />
                           {/* <Text style={{color:"white",textAlign:'center',fontSize:11, paddingTop:"5%"}}> Total Earned</Text> */}
                           <Text style={{color:"white",textAlign:'center',fontSize:13, paddingTop:"1%",fontWeight:"bold"}}> $20</Text>
                           {/* <Text style={[Style.textsm,{width:60}]}> 5%</Text>
                           <Progress.Bar progress={0.05} width={40} color="white" /> */}
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/increase.png")} />
                           {/* <Text style={{color:"white",textAlign:'center',fontSize:11, paddingTop:"5%"}}> Total Earned</Text> */}
                           <Text style={{color:"white",textAlign:'center',fontSize:13, paddingTop:"1%",fontWeight:"bold"}}> $20</Text>
                           {/* <Text style={[Style.textsm,{width:60}]}>10%</Text>
                           <Progress.Bar progress={0.1} width={40} color="white" /> */}
                       </View>
                 </View>

                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/donation-1.png")} />
                           {/* <Text style={{color:"white",textAlign:'center',fontSize:11, paddingTop:"5%"}}> Total Earned</Text> */}
                           <Text style={{color:"white",textAlign:'center',fontSize:13, paddingTop:"1%",fontWeight:"bold"}}> $20</Text>
                           {/* <Text style={[Style.textsm,{width:60}]}>8%</Text>
                           <Progress.Bar progress={0.8} width={40} color="white" /> */}
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/car-1.png")} />
                           {/* <Text style={{color:"white",textAlign:'center',fontSize:11, paddingTop:"5%"}}> Total Earned</Text> */}
                           <Text style={{color:"white",textAlign:'center',fontSize:13, paddingTop:"1%",fontWeight:"bold"}}> $20</Text>
                           {/* <Text style={[Style.textsm,{width:60}]}> 7.5%</Text>
                           <Progress.Bar progress={0.75} width={40} color="white" /> */}
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/sun-umbrella-1.png")} />
                           {/* <Text style={{color:"white",textAlign:'center',fontSize:11, paddingTop:"5%"}}> Total Earned</Text> */}
                           <Text style={{color:"white",textAlign:'center',fontSize:13, paddingTop:"1%",fontWeight:"bold"}}> $20</Text>
                           {/* <Text style={[Style.textsm,{width:60}]}>2.5%</Text>
                           <Progress.Bar progress={0.025} width={40} color="white" /> */}
                       </View>
                 </View>
                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/home-1.png")} />
                           {/* <Text style={{color:"white",textAlign:'center',fontSize:11, paddingTop:"5%"}}> Total Earned</Text> */}
                           <Text style={{color:"white",textAlign:'center',fontSize:13, paddingTop:"1%",fontWeight:"bold"}}> $20</Text>
                           {/* <Text style={[Style.textsm,{width:60}]}>30%</Text>
                           <Progress.Bar progress={0.3} width={40} color="white" /> */}
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/idea-1.png")} />
                           {/* <Text style={{color:"white",textAlign:'center',fontSize:11, paddingTop:"5%"}}> Total Earned</Text> */}
                           <Text style={{color:"white",textAlign:'center',fontSize:13, paddingTop:"1%",fontWeight:"bold"}}> $20</Text>
                           {/* <Text style={[Style.textsm,{width:60,}]}> 3%</Text>
                           <Progress.Bar progress={0.03} width={40} color="white" /> */}
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
