import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Dimensions,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
import {BarChart,LineChart } from "react-native-chart-kit";
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'



const Employ_Dashboard = ({navigation}) => {

function barChart(){
    return(
        <VerticalBarGraph
        data={[20, 45, 28, 80, 99, 43, 50]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
        width={Dimensions.get('window').width - 90}
        height={200}
        barRadius={5}
        barWidthPercentage={0.65}
        barColor='#2C3F4E'
        baseConfig={{
            hasXAxisBackgroundLines: false,
            xAxisLabelStyle: {
            position: 'right',
            prefix: '$'
            }
        }}
        style={{
            marginBottom: 30,
            padding: 10,
            paddingTop: 20,
            borderRadius: 20,
            // rgba(255,255,255,0.1)
            backgroundColor: "rgba(255,255,255,0.2)",
            alignSelf: 'center',
            width: Dimensions.get('window').width - 70
        }}
        />
    )
}

    return (
        
         <ImageBackground source={require("../assets/backround.png")}  style={[{justifyContent:"center",flex:1,width:"100%",alignItems: 'center',}]} >
            <View style={{width:"90%",height:"95%",justifyContent:"space-around"}}>
                <View style={{flexDirection:'row', width:"45%",justifyContent:"space-between",alignItems: 'center',}}>
                    <TouchableOpacity 
                     style={{backgroundColor:"#29AB87",padding:7,borderRadius:20}}>
                      <Image source={require("../assets/back4.png")} style={{width:20,height:20}}  />
                    </TouchableOpacity>
                    <Text style={Style.h3}>DashBoard</Text>
                </View>

                <Text style={[Style.text,{fontSize:16}]}>Earning this year</Text>

               
                {barChart()}

      

                <View style={{backgroundColor:"rgba(255,255,255,0.3)",height:80,borderRadius:20,flexDirection: 'row',justifyContent:"space-around"}}>
                    <View style={[Style.center,{flex:1}]}>
                        <Text style={{color:"white",textAlign:'center',fontSize:10}}>Total Earning</Text>
                        <Text style={{color:"white",paddingTop:5}}>+2000</Text>
                    </View>
                    <View style={[Style.center,{flex:1}]}>
                        <Text style={{color:"white",textAlign:'center',fontSize:10}}>This Week</Text>
                        <Text style={{color:"white",paddingTop:5}}>+100</Text>
                    </View>
                    <View style={[Style.center,{flex:1}]}>
                        <Text style={{color:"white",textAlign:'center',fontSize:10}}>Total Earnings this Month</Text>
                        <Text style={{color:"white",paddingTop:5}}>+2000</Text>
                    </View>
                    <View style={[Style.center,{flex:1}]}>
                        <Text style={{color:"white",textAlign:'center',fontSize:10}}>Total Earnings this Year</Text>
                        <Text style={{color:"white",paddingTop:5}}>+3000</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row',width:"100%",justifyContent:"space-around"}}>
                    <View style={Style.center}> 
                    <View style={[Style.center,{},styles.circle]}>
                        <Text style={[Style.text,{textAlign:"center",width:90}]}> My Average Tip Amount $</Text>
                    </View>
                    <Text style={[Style.text,{textAlign:"center",width:80}]}>2000</Text></View>
                    <View style={Style.center}>
                    <View style={[Style.center,{},styles.circle]}>
                        <Text style={[Style.text,{textAlign:"center",width:80}]}>  My Service Rating</Text>
                    </View>
                    <Text style={[Style.text,{textAlign:"center",width:80}]}>5</Text></View>
                </View>

            </View>
         </ImageBackground> 
    )
}


export default Employ_Dashboard

const styles = StyleSheet.create({
    circle:{
        backgroundColor:"#2C3F4E",
        borderRadius:60,
        borderColor:"white",
        borderWidth:1,
        width:110,
        height:110,
        margin:10,
        padding:10
    }
})

// const [GraphData, setGraphData] = useState({
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43]
//       }
//     ]
//   })