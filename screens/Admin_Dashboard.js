import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Dimensions,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
import {BarChart,LineChart,PieChart} from "react-native-chart-kit";
import LineGraph from '@chartiful/react-native-line-graph'
// import Pie from 'react-native-pie'

const data = [
    {
      name: "Average Tip Per Transaction",
      population: 200,
      color: "#FFFFFF",
      legendFontColor: "#FFFFFF",
      legendFontSize: 15
    },
    {
      name: "Total Employee",
      population: 1000,
      color: "#2C3F4E",
      legendFontColor: "#FFFFFF",
      legendFontSize: 15,
      
    },
]
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const Admin_Dashboard = () => {

function pieChart(){
    return(
        <Pie
            radius={50}
            innerRadius={45}
            series={[60]}
            colors={['#f00']}
            backgroundColor='#ddd' />
    )
}

 function Linegraph(){
     return (
    <LineGraph
                data={[10, 15, 7, 20, 14, 12, 10, 20]}
                labels={[1,3,5,10,9,2,3,6]}
                // labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug']}

                width={Dimensions.get('window').width - 90}
                height={200}
                lineColor='#2C3F4E'
                dotColor='#2C3F4E'
                lineWidth={3}
                isBezier={false}
                hasDots={true}
                
                baseConfig={{
                    startAtZero: false,
                    hasXAxisBackgroundLines: false,
                    hasXAxisLabels:false,
                    hasYAxisLabels:true,
                    
                    xAxisLabelStyle: {
                    prefix: '$',
                    offset: 0,
                    color:"white"
                    },
                    yAxisLabelStyle:{
                        color:"white",
                    }
                }}
                style={{
                    alignSelf: 'center',
                    marginBottom: 30,
                    padding: 10,
                    paddingTop: 20,
                    borderRadius: 20,
                    width: Dimensions.get('window').width - 70,
                    backgroundColor: "rgba(255,255,255,0.2)",
                }}
                
                />
) }

    return (
        <ImageBackground source={require("../assets/backround.png")} style={[{justifyContent:"center",flex:1,width:"100%",alignItems: 'center',}]} >
        <View style={{width:"90%",height:"95%",justifyContent:"space-around"}}>
           
            <View style={{flexDirection:'row', width:"45%",justifyContent:"space-between",alignItems: 'center',}}>
                <TouchableOpacity 
                 style={{backgroundColor:"#29AB87",padding:7,borderRadius:20}}>
                  <Image source={require("../assets/back4.png")} style={{width:20,height:20}}  />
                </TouchableOpacity>
                <Text style={Style.h3}>DashBoard</Text>
            </View>


            <PieChart
                data={data}
                width={ Dimensions.get('window').width - 70}
                height={180}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="0"
                
                absolute
                
                // lineWidth={60}
                style={{alignSelf: 'center',alignItems: 'center',}}
                />


            {/* {pieChart()} */}

            {Linegraph()}

   

            <View>
            <Button text="View Tipper" size="medium"  />
            <Button text="View Emplyee" size="medium"  />
            </View>

        </View>
        </ImageBackground>
    )
}

export default Admin_Dashboard

const styles = StyleSheet.create({
    gauge: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
      },
})
