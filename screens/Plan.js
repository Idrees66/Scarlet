import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Plan = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/bg.png")} style={[Style.container,{justifyContent:"center",paddingHorizontal: 0,}]} >
              <View style={{flex:1,justifyContent:"space-around"}} >
                  <Text style={[Style.h3,{paddingLeft: 30,}]}>Tips Plan</Text>

 {/* ------------------------------------------Rows start------------------------------------------------------- */}
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
    {/* -------------------------------------Rows End------------------------------------------------------------ */}

    <Text style={[Style.h3,{paddingLeft: 30,}]}>This Month Tip Goals</Text>

{/* ------------------------------------------Rows start------------------------------------------------------- */}
                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/mortarboard-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}>20%</Text>
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/medical-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}> 5%</Text>
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/increase.png")} />
                           <Text style={[Style.textsm,{width:60}]}>10%</Text>
                       </View>
                 </View>

                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/donation-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}>8%</Text>
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/car-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}> 7.5%</Text>
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/sun-umbrella-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}>2.5%</Text>
                       </View>
                 </View>
                 <View style={styles.row}>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center',}}>
                           <Image source={require("../assets/home-1.png")} />
                           <Text style={[Style.textsm,{width:60}]}>30%</Text>
                       </View>
                       <View style={{flex:1,justifyContent:"center",alignItems: 'center'}}>
                           <Image source={require("../assets/idea-1.png")} />
                           <Text style={[Style.textsm,{width:60,}]}> 3%</Text>
                       </View>
                 </View>
                  {/* -------------------------------------Rows End------------------------------------------------------------ */}
            </View>
        </ImageBackground>
    )
}

export default Plan

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        // backgroundColor:"brown"
    }
})
