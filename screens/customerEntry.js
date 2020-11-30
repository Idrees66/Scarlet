import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Dimensions,ScrollView,TextInput, KeyboardAvoidingView, Alert  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { SearchBar } from 'react-native-elements';
import Modal from 'react-native-modal';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Customer = ({navigation})=>{


    return(
    <TouchableOpacity

     style={{height:120,width:"100%",backgroundColor:"rgba(0,0,0,0.1)",borderRadius:20,marginTop:10,padding:10}}>
    <View style={{flex:2,flexDirection:"row"}}>
        <View style={{flex:1,flexDirection: 'row', justifyContent:"space-around"}}>
        <Image source={require("../assets/img.png")} style={{width:64,height:64,alignSelf:"center"}}  />
            {/* <View style={{justifyContent: 'center',}}>
                <Text style={Style.h3}>John Smith</Text>
                <Text style={{color:"white",fontSize:14}}>+1 1234567890</Text>
            </View> */}
        </View>
        <View style={{flex:2,justifyContent:"space-around",}}>
            <Text style={Style.h4}>James Robert</Text>
            <Text style={{color:"white",fontSize:14}}>ID: 123456789</Text>
            <Text style={{color:"white",fontSize:14}}>james1214@gmail.com</Text>
            <Text style={{color:"white",fontSize:14}}>Street #, California, USA</Text>
            <Text style={{color:"white",fontSize:14}}>+1-123456789</Text>
        </View>
    </View>

</TouchableOpacity>
)}

const  customerEntry = () => {
    const [search, setsearch] = useState("")

    const updateSearch = (search) => {
        // console.log(search)
        setsearch(search)
      };

  


    return (
        <ImageBackground source={require("../assets/backround.png")} style={[{justifyContent:"center",flex:1,width:"100%",alignItems: 'center',}]} >
        <View style={{width:"97%",height:"95%",}}>
        <SearchBar
            placeholder="Search Customer..."
            onChangeText={updateSearch}
            value={search}
            containerStyle={{backgroundColor:"rgba(0,0,0,0)",borderTopWidth:0,borderBottomWidth:0}}
            inputContainerStyle={{backgroundColor:"rgba(0,0,0,0.1)",borderRadius:20}}
            inputStyle={{color:"white"}}
            placeholderTextColor="white"
            leftIconContainerStyle={{color:"white"}}
            lightTheme={true}
            
            />

        <ScrollView style={{height:"80%", }}>
        <Customer  />
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        </ScrollView>


        </View>
        </ImageBackground>
    )
}

export default customerEntry

const styles = StyleSheet.create({})
