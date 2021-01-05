import React,{useState} from 'react'
import { Alert } from 'react-native';
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,  Dimensions,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Map = ({navigation}) => {

    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    function rating(rating){
        let rat = []
        for(let i=0;i<rating;i++){
            
            rat.push(
                <Image  source={require("../assets/star.png")} style={{width:20,height:20}}  />
            )
        }
        return rat;
   
    }

   function handlePress(){
    navigation.navigate("Bank_Detail")
    toggleModal()
    }

    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[{justifyContent:"center",flex:1,width:"100%"}]} >
   
       {/* ---------------------------------Model here-------------------------- */}
       <Modal isVisible={isModalVisible}  animationIn="zoomIn"  
            customBackdrop={<View style={{flex: 1}} />}>
          <View  style={styles.modelView} >

            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Image source={require("../assets/img.png")}  />
                <View>
                    <Text style={Style.h3}>John Smith</Text>
                    {/* <Text style={Style.h5}>+1 1234567890</Text>
                    <Text style={Style.h5}>johnsmith@gmail.com</Text> */}
                </View>
                <TouchableOpacity  onPress={toggleModal} >
                <Image source={require("../assets/cross.png")} style={{padding:8}}  />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row',borderBottomWidth:1,borderColor:"white",width:"50%"}}>
                <Text style={[Style.h4,{color:"gray"}]}>$</Text>
                <TextInput placeholder="Enter Amount" style={{color:"white",fontSize:16,paddingLeft:10}} placeholderTextColor="gray" />
            </View>

            <View>
                <View style={{flexDirection: 'row',}}>
                <Text style={[Style.h4,{color:"orange"}]}>Transaction fee:</Text>
                <TouchableOpacity onPress={()=>Alert.alert("","Covering the transaction fee ensures they receive your full support!")} style={{marginLeft:10,borderColor:"white",borderWidth:1,borderRadius:20,justifyContent:"center"}}>
                    <Text style={{color:"white",paddingHorizontal:8, paddingVertical:0,fontWeight:"bold",fontSize:14}}>i</Text>
                </TouchableOpacity>
                <Text  style={{color:"orange",fontSize:16,paddingLeft:10}}>2.5%</Text>
                </View>
                <Text style={{color:"white",fontSize:16}}>Include with tip amount</Text>
            </View>

           <View style={{alignItems: 'center',justifyContent: 'center',}}>
           <Text  style={{color:"white",fontSize:15}}>Please, help us to improve our service!</Text>
           <Text  style={{color:"white",fontSize:16}}>We'll be happy to know you opinion!</Text>
           </View>

           <View style={{ flexDirection: 'row',alignItems: 'center',justifyContent:"space-around",width:"40%",alignSelf:"center"}}>
             {rating(4)}
            </View>

        <View style={{flexDirection:"row"}}>
            <View style={{flex:1}}>
            <TouchableOpacity style={{borderColor:"white",borderWidth:1,width:70,padding:3,borderRadius:10,alignItems: 'center',}}>
               <Text style={{color:"white"}}>Share</Text>
           </TouchableOpacity>
            </View>

           <View style={{flex:1,flexDirection: "row-reverse",}}>
            <Text  style={{color:"white",fontSize:18,}}>5</Text>
            <Image  source={require("../assets/star.png")} style={{width:15,height:15,alignSelf: 'center'}}  />
            <Text  style={{color:"white",fontSize:15,marginRight:20}}>Total Rating :</Text>
           </View>
        </View>


           

           <View style={[Style.inputContainer,{}]}>
                <TextInput placeholder="Add your own Review" style={[Style.textInput,{width:"90%"}]} placeholderTextColor="gray" />
            </View>

  

            <Button text="Confirm" size="large" onPress={()=>handlePress()} />

          </View >
        </Modal>
            {/* ---------------------------------Model here-------------------------- */}


        <ImageBackground  source={require("../assets/map.png")} style={{flex:4,alignItems: 'center',justifyContent: 'center',}} >
            <TouchableOpacity onPress={toggleModal}>
              <Image  source={require("../assets/loc.png")} style={{ width:40,height:50}} />
            </TouchableOpacity>
        </ImageBackground>
        <View  style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>
        <ImageBackground  source={require("../assets/ext.png")} style={{ width:80,height:80,alignItems: 'center',justifyContent: 'center',}}>
         <Animatable.Image   animation="pulse" easing="ease-out" iterationCount="infinite"
             source={require("../assets/camera.png")} style={{ width:60,height:60}} />
        </ImageBackground>
        <Text style={[Style.text,{paddingTop:10}]}>Scan QR</Text>
        </View>

        </ImageBackground>
    )
}

export default Map

const styles = StyleSheet.create({
    modelView:{
        width:"100%",
        height:"80%",
        backgroundColor:"#2C3F4E",
        alignSelf: 'center',
        borderRadius:20,
        padding:30,
        justifyContent:"space-around"
    }
})
