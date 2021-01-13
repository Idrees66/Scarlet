import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,ScrollView,Dimensions,TextInput, KeyboardAvoidingView  } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { SearchBar } from 'react-native-elements';
import Button from '../components/Button';
import Style from "../Styles/GlobalStyles";
import ProgressCircle from 'react-native-progress-circle'
import Swiper from 'react-native-swiper'

const CustomerBody = ()=>{
    function progress(){
        return(
            <ProgressCircle
                percent={60}
                radius={30}
                borderWidth={5}
                color="#2C3F4E"
                shadowColor="#999"
                bgColor="#0BAFAE"
            >
                <Text style={{ fontSize: 10,backgroundColor:"rgba(0,0,0,0)",color:"white" }}>{'$60.350'}</Text>
            </ProgressCircle>
        )
    }
    return(
    <View>
                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,}}>
                    <Text style={{color:"white"}}>Transactional Data </Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Payments Received</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Number of Payments</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}>Total Payments by Category</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}> Membership Subscription</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}> Growth Per Payment</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>
    </View>
    )
}


const EmployeBody = ()=>{
    function progress(){
        return(
            <ProgressCircle
                percent={60}
                radius={30}
                borderWidth={5}
                color="#2C3F4E"
                shadowColor="#999"
                bgColor="#0BAFAE"
            >
                <Text style={{ fontSize: 10,backgroundColor:"rgba(0,0,0,0)",color:"white" }}>{'$60.350'}</Text>
            </ProgressCircle>
        )
    }
    return(
    <View>
                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,}}>
                    <Text style={{color:"white"}}>Transactional Data </Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Payments Received</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Number of Payments</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}>Total Payments by Category</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}> Membership Subscription</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}> Growth Per Payment</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>
    </View>
    )
}


const EmployerBody = ()=>{
    function progress(){
        return(
            <ProgressCircle
                percent={60}
                radius={30}
                borderWidth={5}
                color="#2C3F4E"
                shadowColor="#999"
                bgColor="#0BAFAE"
            >
                <Text style={{ fontSize: 10,backgroundColor:"rgba(0,0,0,0)",color:"white" }}>{'$60.350'}</Text>
            </ProgressCircle>
        )
    }
    return(
    <View>
                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,}}>
                    <Text style={{color:"white"}}>Transactional Data </Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Payments Received</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Number of Payments</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}>Total Payments by Category</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}> Membership Subscription</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>

                <View style={{borderTopWidth:1, borderTopColor:"white",paddingTop:5,width:Dimensions.get("window").width,alignSelf: 'center',}}>
                    <Text style={{color:"white",paddingLeft:"10%"}}> Growth Per Payment</Text>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={[Style.center,{flex:1}]}> 
                        {progress()} 
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employer</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Employee</Text>
                        </View>
                        <View style={[Style.center,{flex:1}]}>
                        {progress()}
                        <Text style={{color:"white",paddingTop:5,fontSize:12}}>Customer</Text>
                        </View>
                    </View>
                </View>
    </View>
    )
}

const admin_Manage = () => {
    const [status, setstatus] = useState("customer")

    function progress(){
        return(
            <ProgressCircle
                percent={60}
                radius={30}
                borderWidth={5}
                color="#2C3F4E"
                shadowColor="#999"
                bgColor="#0BAFAE"
            >
                <Text style={{ fontSize: 10,backgroundColor:"rgba(0,0,0,0)",color:"white" }}>{'$60.350'}</Text>
            </ProgressCircle>
        )
    }

    // function handleCustomer(){
    //     console.log("Customer")
    // }
    // function handleEmploye(){
    //     console.log("Employee")
    // }
    // function handleEmployer(){
    //     console.log("Enployer..")
    // }

    function handleReq(value){
        //console.log("Value: ",value)
        if (value==="customer"){
            // console.log("Customer")
            setstatus("customer")
        }
        else if (value==="employe"){
            // console.log("Employee")
            setstatus("employe")
        }
        else{
            // console.log("Enployer..")
            setstatus("employer")
        }
    }

    return (
        
        <ImageBackground source={require("../assets/animatedBg.gif")} style={[{justifyContent:"center",flex:1,width:"100%",alignItems: 'center',}]} >
        <View style={{width:"85%",height:"95%",justifyContent: "space-between",}}>
                <View style={{flexDirection:'row', width:"55%",justifyContent:"space-between",alignItems: 'center',}}>
                    <TouchableOpacity 
                     style={{padding:7,borderRadius:20}}>
                      <Image source={require("../assets/profile.png")} style={{width:20,height:20}}  />
                    </TouchableOpacity>
                    <Text style={Style.h3}>Manage Users</Text>
                </View>

                <Swiper style={styles.wrapper} buttonWrapperStyle={{color:"white", }} showsButtons={true} showsPagination={false}
                //  onScrollBeginDrag={(e)=>console.log("loaded2..",)}
                  >
                    <TouchableOpacity onPress={()=>handleReq("customer")} style={styles.slide1}>
                        {/* {console.log("Customer")} */}
                        <Image source={require("../assets/businessman.png")}  />
                        <Text style={{backgroundColor:"white",paddingHorizontal:5,borderRadius:10,fontSize:14,alignSelf: 'center',marginTop:5}}>Customer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=> handleReq("employer")}  style={styles.slide2}>
                    {/* {console.log("Empoyer")} */}
                        <Image source={require("../assets/businessman.png")}  />
                        <Text style={{backgroundColor:"white",paddingHorizontal:15,borderRadius:10,fontSize:14,alignSelf: 'center',marginTop:5}}>Employer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>handleReq("employe")} style={styles.slide3}>
                    {/* {console.log("Employee")} */}
                        <Image source={require("../assets/businessman.png")}  />
                        <Text style={{backgroundColor:"white",paddingHorizontal:5,borderRadius:10,fontSize:14,alignSelf: 'center',marginTop:5}}>Employee</Text>
                    </TouchableOpacity>
                </Swiper>
                
                {/* <View style={{backgroundColor:"rgba(255,255,255,0.2)",height:162,borderRadius:20,flexDirection:"row",justifyContent:"center",alignItems: 'center',}}>
                <View  style={[Style.center,{marginRight:20}]}>
                <Image source={require("../assets/businessman.png")} style={{width:40,height:50,}}  />
                <Text style={{backgroundColor:"white",paddingHorizontal:5,borderRadius:10,fontSize:10,alignSelf: 'center',marginTop:5}}>Customer</Text>
                </View>
                <View  style={[Style.center,]}>
                <Image source={require("../assets/businessman.png")}  />
                <Text style={{backgroundColor:"white",paddingHorizontal:15,borderRadius:10,fontSize:14,alignSelf: 'center',marginTop:5}}>Employer</Text>
                </View>
                <View style={[Style.center,{marginLeft:20}]}>
                <Image source={require("../assets/businessman.png")} style={{width:40,height:50,}}  />
                <Text style={{backgroundColor:"white",paddingHorizontal:5,borderRadius:10,fontSize:10,alignSelf: 'center',marginTop:5}}>Employee</Text>
                </View>
                </View> */}

{(status==="employe")? EmployeBody(): null}
{(status==="employer")? EmployerBody(): null}
{(status==="customer")? CustomerBody(): null}
                {/* {Body()} */}

                
              


        </View>
        </ImageBackground>
    )
}

export default admin_Manage

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:"rgba(255,255,255,0.2)"
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
