import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

const w = Dimensions.get('window').width

const Button = ({ text, onPress,size }) => {


  const btnBgColor = "white"
  // const border = type === 'outlined' && { borderWidth: 1 }
  const btnWidth = size === 'large' && { width:"100%" } || size === 'medium' && { width:"70%" } || size === 'small' && { width:"50%", }

  const containerStyle = {
    backgroundColor:"white"
  }



  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btnContainerStyle, containerStyle,btnWidth]}>
        <Text style={[styles.btnTextStyle,{color: "black"}]}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  btnContainerStyle: {
    // paddingVertical: 8,
    padding:12,
    // borderRadius: 5,
    //  borderWidth:1,
      borderRadius:30 , 
    //  width:w-110 ,
     margin:10, 
     alignSelf: 'center',
    //  borderColor:"yellow"
    elevation:10,
  },
  btnTextStyle: {
   
    fontSize: 16,
    // textTransform: 'uppercase',
    fontWeight:"bold",
    textAlign: 'center',
   
    // fontFamily: 'Quicksand-Medium'
  }
})

export default Button