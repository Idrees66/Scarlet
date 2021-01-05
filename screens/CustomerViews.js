import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Dimensions,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Customer = ({navigation})=>{
    function rating(rating){
        let rat = []
        for(let i=0;i<rating;i++){
            
            rat.push(
                <Image  source={require("../assets/star.png")} style={{width:20,height:20}}  />
            )
        }
        return rat;
   
    }

    return(
    <TouchableOpacity style={{height:120,width:"100%",backgroundColor:"rgba(0,0,0,0.1)",borderRadius:20,marginTop:10,padding:10}}>
    <View style={{borderBottomWidth:1, borderColor:"white",flex:2,flexDirection:"row"}}>
        <View style={{flex:4,flexDirection: 'row', justifyContent:"space-around"}}>
        <Image source={require("../assets/img.png")} style={{width:60,height:60,alignSelf:"center"}}  />
            <View style={{justifyContent: 'center',}}>
                <Text style={Style.h3}>John Smith</Text>
                <Text style={{color:"white",fontSize:14}}>+1 1234567890</Text>
            </View>
        </View>
        <View style={{flex:3,justifyContent:"space-around",alignItems: 'center',}}>
            <Text style={{color:"white",fontSize:14}}>Discount code: 0000</Text>
            <Text style={{color:"white",fontSize:14}}>Transaction    20.50 $</Text>
        </View>
    </View>
    <View style={{flex:1,flexDirection:"row"}}>
        <View style={[Style.center,{flex:1}]}>
            <Text style={{color:"white",fontSize:12}}>Wonderful Experience I have</Text>
        </View>
        <View style={[Style.center,{flexDirection: 'row',justifyContent:"space-around",width:"40%"}]}>
             {rating(5)}
        </View>
    </View>
</TouchableOpacity>
)}

const CustomerViews = () => {
    const [search, setsearch] = useState("")

    const updateSearch = (search) => {
        setsearch(search)
      };


    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[{justifyContent:"center",flex:1,width:"100%",alignItems: 'center',}]} >
        <View style={{width:"97%",height:"95%",}}>
        <SearchBar
            placeholder="Search"
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
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        </ScrollView>


        </View>
        </ImageBackground>
    )
}

export default CustomerViews

const styles = StyleSheet.create({})
