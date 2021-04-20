import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from './screens/SignIn';
import SignUp_Company from './screens/SignUp_Company';
import Dashboard from './screens/Dashboard';
import SignUP_Dashboard from './screens/SignUp_Dashboard';
import SignUp_Individual from './screens/SignUp_Individual.js';
import Bank_Detail from './screens/Bank_Detail';
import Plan from './screens/Plan';
import Employe_Account from './screens/Employe_Account';
import Map from './screens/Map';
import Employ_Dashboard from './screens/Employ_Dashboard';
import Admin_Dashboard from './screens/Admin_Dashboard';
import CustomerViews from './screens/CustomerViews';
import customerEntry from './screens/customerEntry';
import EmployEntry from './screens/EmployEntry';
import Create_Company from './screens/Create_Company';
import admin_Manage from './screens/admin_Manage';
import Supporter_Menu from './screens/Supporter_Menu';
import Individual_Menu from './screens/Individual_Menu';
import Welcome from './screens/Welcome';
import SignUp_Supporter from './screens/SignUp_Supporter';


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerFunction(){
//   return(
//   <Drawer.Navigator initialRouteName="Employe_Account">
//     <Drawer.Screen name="Employe_Account" component={Employe_Account} />
//     <Drawer.Screen name="Employ_Dashboard" component={Employ_Dashboard} />
//   </Drawer.Navigator>
//   )
// }

function StackFunction() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Dashboard" component={Dashboard} 
          options={{ title: 'Dashboard', headerShown:false, }} /> 
        <Stack.Screen name="Welcome" component={Welcome} 
          options={{ title: 'Welcome', headerShown:false, }} /> 
        <Stack.Screen name="SignUP_Dashboard" component={SignUP_Dashboard} 
          options={{ title: 'SignUP_Dashboard', headerShown:false, }} /> 
        <Stack.Screen name="Map" component={Map} 
          options={{ title: 'Map', headerShown:false, }} /> 
        <Stack.Screen name="SignIn" component={SignIn} 
          options={{ title: 'SignIn', headerShown:false, }} /> 
        <Stack.Screen name="SignUp_Company" component={SignUp_Company} 
          options={{ title: 'SignUp_Company', headerShown:false, }} /> 
        <Stack.Screen name="SignUp_Individual" component={SignUp_Individual} 
          options={{ title: 'SignUp_Individual', headerShown:false, }} /> 
        <Stack.Screen name="SignUp_Supporter" component={SignUp_Supporter} 
          options={{ title: 'SignUp_Supporter', headerShown:false, }} /> 
        <Stack.Screen name="Bank_Detail" component={Bank_Detail} 
          options={{ title: 'Bank_Detail', headerShown:false, }} /> 
        <Stack.Screen name="Plan" component={Plan} 
          options={{ title: 'Plan', headerShown:false, }} /> 
        <Stack.Screen name="Employe_Account" component={Employe_Account} 
          options={{ title: 'Employe_Account', headerShown:false, }} /> 
        <Stack.Screen name="Employ_Dashboard" component={Employ_Dashboard} 
          options={{ title: 'Employ_Dashboard', headerShown:false, }} />
        <Stack.Screen name="Admin_Dashboard" component={Admin_Dashboard} 
          options={{ title: 'Admin_Dashboard', headerShown:false, }} />
        <Stack.Screen name="CustomerViews" component={CustomerViews} 
          options={{ title: 'CustomerViews', headerShown:false, }} /> 
        <Stack.Screen name="customerEntry" component={customerEntry} 
          options={{ title: 'customerEntry', headerShown:false, }} /> 
        <Stack.Screen name="EmployEntry" component={EmployEntry} 
          options={{ title: 'EmployEntry', headerShown:false, }} /> 
        <Stack.Screen name="Create_Company" component={Create_Company} 
          options={{ title: 'Create_Company', headerShown:false, }} /> 
        <Stack.Screen name="admin_Manage" component={admin_Manage} 
          options={{ title: 'admin_Manage', headerShown:false, }} /> 
        <Stack.Screen name="Supporter_Menu" component={Supporter_Menu} 
          options={{ title: 'Supporter_Menu', headerShown:false, }} /> 
        <Stack.Screen name="Individual_Menu" component={Individual_Menu} 
          options={{ title: 'Individual_Menu', headerShown:false, }} /> 
    </Stack.Navigator>
  );
}


export default function App() {
  console.disableYellowBox = true; 
  return (
    <NavigationContainer>
    <StackFunction />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// "react-native-image-slider-box": "^1.0.12",
// "react-native-elastic-image-slider": "^1.0.0",
// "react-native-animated-view-slider": "^2.1.0",