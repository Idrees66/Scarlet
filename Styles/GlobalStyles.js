import React from 'react'
import { StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const GlobalStyles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:30,
        paddingTop:30,
        paddingBottom:30,
    },
    h1:{
        fontSize:26,
        fontWeight:"bold",
        color:"white"
    },
    h2:{
        fontSize:22,
        fontWeight:"bold",
        color:"white"
    },
    h3:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    },
    h4:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
    },
    h5:{
        color:"white",
        fontSize:14,
        fontWeight:"bold",
    },
    textInput:{
        padding:10,
        color:"white",
        fontSize:16,
        // borderBottomColor:"white",
        // borderBottomWidth:1,
        marginTop:20,
      
        // backgroundColor:"crimson"
    },
    inputContainer:{
        width:"100%",
        flexDirection: 'row',
        // backgroundColor:"coral",
        borderBottomColor:"#FFFFFF",
        borderBottomWidth:1,
        alignItems: 'center',
    },
    text:{
        color:"white",
    },
    textsm:{
        color:"white",
        fontSize:13,
        alignSelf: 'center',
        textAlign:'center',
        paddingTop:"5%"
    },
    profileImg:{
        width:85,
        height:85,
        alignSelf:"center",
        // backgroundColor:"coral",
        //   borderRadius:70
    },
    social:{
        width:20,
        height:20,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})

export default GlobalStyles