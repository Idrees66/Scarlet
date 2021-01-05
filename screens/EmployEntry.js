import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,ScrollView,Dimensions,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { SearchBar } from 'react-native-elements';
import Modal from 'react-native-modal';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";

const Customer = ({navigation,onPress})=>{


    return(
    <TouchableOpacity onPress={onPress} style={{height:120,width:"100%",backgroundColor:"rgba(0,0,0,0.1)",borderRadius:20,marginTop:10,padding:10}}>
    <View style={{flex:1,flexDirection:"row"}}>
        <View style={{flex:0.7,flexDirection: 'row', justifyContent:"space-around"}}>
        <Image source={require("../assets/img.png")} style={{width:64,height:64,alignSelf:"center"}}  />
        </View>
        <View style={{flex:2,justifyContent:"space-around",}}>
            <View style={{flexDirection: 'row',justifyContent:"space-between",}}>
                <View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.text}>Name: </Text>
                        <Text style={styles.textBold}> Carlos</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.text}>Company: </Text>
                        <Text style={styles.textBold}> XYZ</Text>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.text}>Member ID: </Text>
                        <Text style={styles.textBold}> 12345</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.text}>Industry: </Text>
                        <Text style={styles.textBold}> ABC</Text>
                    </View>
                </View>
            </View>
            <View style={{justifyContent:"space-between",}}>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.text}>Address: </Text>
                        <Text style={styles.textBold}>Street#, California, USA</Text>
                    </View>

            </View>
            <View style={{flexDirection: 'row',justifyContent:"space-between",}}>
                <View style={{flex:1}}>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.text}>Amount Earned: </Text>
                        <Text style={styles.textBold}> 50$</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.text}>Position: </Text>
                        <Text style={styles.textBold}> Manager</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                <Text style={styles.text}> Date & Time: 10 Nov,12:00am</Text>
                </View>
            </View>

        </View>

    </View>

</TouchableOpacity>
)}

const  EmployEntry = () => {
    const [search, setsearch] = useState("")
    const [isModalVisible, setModalVisible] = useState(false);

    const updateSearch = (search) => {
        setsearch(search)
      };

      const toggleModal = () => {
        console.log("Model called...")
      setModalVisible(!isModalVisible);
    };


    return (
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[{justifyContent:"center",flex:1,width:"100%",alignItems: 'center',}]} >
        <View style={{width:"97%",height:"95%",}}>
        <SearchBar
            placeholder="Search Employee..."
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
        <Customer onPress={toggleModal} />
        <Customer onPress={toggleModal} />
        <Customer onPress={toggleModal} />
        <Customer onPress={toggleModal}/>
        <Customer  onPress={toggleModal}/>
        </ScrollView>


       {/* ---------------------------------Model here-------------------------- */}
       <Modal isVisible={isModalVisible}  
            customBackdrop={<View style={{flex: 1}} />}>
          <View style={styles.modelView}>

            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{flex:19,}}>
                <Image style={{alignSelf: 'center', width:90,height:90}} source={require("../assets/img.png")}  />
                </View>


                <TouchableOpacity style={{flex:1}} onPress={toggleModal} >
                <Image source={require("../assets/cross.png")} style={{padding:8}}  />
                </TouchableOpacity>
            </View>



            <View style={{height:"50%",justifyContent:"space-between"}} >
                <View style={{flexDirection: 'row',}}>
                <Text style={Style.h4}>Name </Text>
                <Text  style={{color:"white",fontSize:16,paddingLeft:10}}>James Robert</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={[Style.h4,]}>Company</Text>
                <Text  style={{color:"white",fontSize:16,paddingLeft:10}}>qwerty Ltd</Text>
                </View>
                <View style={{flexDirection: 'row',width:"75%"}}>
                <Text style={Style.h4}>Address</Text>
                <Text  style={{color:"white",fontSize:16,paddingLeft:10}}>33 Nuthatch Dr, Ball Ground, GA</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={Style.h4}>Industry</Text>
                <Text  style={{color:"white",fontSize:16,paddingLeft:10}}>XYZ</Text>
                </View>
                <View style={{flexDirection: 'row',}}>
                <Text style={Style.h4}>Member ID </Text>
                <Text  style={{color:"white",fontSize:16,paddingLeft:10}}>123456789</Text>
                <TouchableOpacity>
                <Text  style={{color:"#0CC2AB",fontSize:16,paddingLeft:20}}>Create New</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={Style.h4}>Position</Text>
                <Text  style={{color:"white",fontSize:16,paddingLeft:10}}>Manager</Text>
                </View>
                <View style={{flexDirection: 'row',}}>
                <Text style={Style.h4}>Tip Amount </Text>
                <Text  style={{color:"white",fontSize:16,paddingLeft:10}}>20.50 $</Text>
                </View>
                <View style={{flexDirection: 'row',}}>
                <Text style={Style.h4}>Date & Time </Text>
                <Text  style={{color:"white",fontSize:16,paddingLeft:10}}>Wed, Nov 07, 2020</Text>
                </View>
            </View>

            <View style={{alignItems: 'center',}}>
                  <Image source={require("../assets/qr-code.png")} resizeMode="contain" />
                  <Text style={[Style.text,{paddingTop:10}]}>Download QR Code</Text> 
            </View>

            <View style={{flexDirection: 'row', alignSelf:"center", width:"70%",justifyContent:"space-between"}}>
            <TouchableOpacity>
            <Text  style={{color:"#0CC2AB",fontSize:16,}}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text  style={{color:"#0CC2AB",fontSize:16,}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text  style={{color:"#0CC2AB",fontSize:16,}}>Change</Text>
            </TouchableOpacity>
            </View>

          </View>
        </Modal>
            {/* ---------------------------------Model here-------------------------- */}



        </View>
        </ImageBackground>
    )
}

export default EmployEntry

const styles = StyleSheet.create({
    text:{
        color:"rgba(255,255,255,0.8)",
        fontSize:12
    },
    textBold:{
        color:"white",
        fontSize:12,
        fontWeight:"bold"
    },
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
