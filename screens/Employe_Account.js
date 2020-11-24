import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,TextInput, KeyboardAvoidingView  } from 'react-native'
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Employe_Account = ({navigation}) => {

    const [name,setName]= useState("John Smith")
    const [email,setEmail]= useState("johnsmith@gmail.com")
    const [phone,setPhone]= useState("+1-123456789")
    const [address,setAddress]= useState("Street #, USA")
    const [position,setPosition]= useState("Manager")
    const [company,setCompany]= useState("XYZ.co.Ltd")

    return (
        <ImageBackground source={require("../assets/bg.png")} style={[Style.container,{justifyContent:"center",paddingHorizontal: 0,}]} >
            <View style={styles.header}>
                <Image source={require("../assets/menu.png")} resizeMode="contain" style={{width:20,marginTop:-20}} />
                <Text style={Style.h3}>My Account</Text>
                <Text style={Style.h3}>Edit</Text>
           </View>
              <View style={{flex:1,justifyContent:"space-around"}} >
                <Image source={require("../assets/img.png")} resizeMode="contain" style={Style.profileImg} />

                <View style={{width:"80%",alignSelf:"center",height:"50%",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:"white"}}>
                        <View style={{flexDirection: 'row',flex:12, }}>
                            <Text style={Style.h4}>Name</Text> 
                            <TextInput placeholder="Phone Number" value={name} style={styles.textInp} placeholderTextColor="white" />
                        </View>
                        <Image source={require("../assets/back3.png")} style={{width:15,height:15,alignSelf: 'center',flex:1}} resizeMode="contain" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:"white"}}>
                        <View style={{flexDirection: 'row',flex:12,}}>
                            <Text style={Style.h4}>Email</Text> 
                            <TextInput placeholder="Phone Number" value={email} style={styles.textInp} placeholderTextColor="white" />
                        </View>
                        <Image source={require("../assets/back3.png")} style={{width:15,height:15,alignSelf: 'center',flex:1}} resizeMode="contain" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:"white"}}>
                        <View style={{flexDirection: 'row',flex:12, }}>
                            <Text style={Style.h4}>Phone</Text> 
                            <TextInput placeholder="Phone Number" value={phone} style={styles.textInp} placeholderTextColor="white" />
                        </View>
                        <Image source={require("../assets/back3.png")} style={{width:15,height:15,alignSelf: 'center',flex:1}} resizeMode="contain" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:"white"}}>
                        <View style={{flexDirection: 'row',flex:12, }}>
                            <Text style={Style.h4}>Address</Text> 
                            <TextInput placeholder="Phone Number" value={address} style={styles.textInp} placeholderTextColor="white" />
                        </View>
                        <Image source={require("../assets/back3.png")} style={{width:15,height:15,alignSelf: 'center',flex:1}} resizeMode="contain" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:"white"}}>
                        <View style={{flexDirection: 'row',flex:12, }}>
                            <Text style={Style.h4}>Position</Text> 
                            <TextInput placeholder="Phone Number" value={position} style={styles.textInp} placeholderTextColor="white" />
                        </View>
                        <Image source={require("../assets/back3.png")} style={{width:15,height:15,alignSelf: 'center',flex:1}} resizeMode="contain" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:"white"}}>
                        <View style={{flexDirection: 'row',flex:12, }}>
                            <Text style={Style.h4}>Company</Text> 
                            <TextInput placeholder="Phone Number" value={company} style={styles.textInp} placeholderTextColor="white" />
                        </View>
                        <Image source={require("../assets/back3.png")} style={{width:15,height:15,alignSelf: 'center',flex:1}} resizeMode="contain" />
                    </View>

                </View>

                <View style={{alignItems: 'center',}}>
                  <Image source={require("../assets/qr-code.png")} resizeMode="contain" />
                  <Text style={[Style.text,{paddingTop:10}]}>Your Tip ID: 012345</Text> 
                </View>
              </View>
        </ImageBackground>
    )
}

export default Employe_Account

const styles = StyleSheet.create({
    header:{
        // width:"100%",
        flexDirection:"row",
        // backgroundColor:"crimson",
        justifyContent:"space-between",
        marginHorizontal:10
    },
    textInp:{
    width:"90%",
    paddingLeft:15,
    color:"white",
    fontSize:18
}
})
