import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp_Company';
import Dashboard from './screens/Dashboard';
import SignUP_Dashboard from './screens/SignUp_Dashboard';
import SignUp_Individual from './screens/SignUp_Individual.js';
import Bank_Detail from './screens/Bank_Detail';
import Plan from './screens/Plan';
import Employe_Account from './screens/Employe_Account';


const Stack = createStackNavigator();

function StackFunction() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} 
          options={{ title: 'Dashboard', headerShown:false, }} /> 
        <Stack.Screen name="SignUP_Dashboard" component={SignUP_Dashboard} 
          options={{ title: 'SignUP_Dashboard', headerShown:false, }} /> 
        <Stack.Screen name="SignIn" component={SignIn} 
          options={{ title: 'SignIn', headerShown:false, }} /> 
        <Stack.Screen name="SignUp" component={SignUp} 
          options={{ title: 'SignUp', headerShown:false, }} /> 
        <Stack.Screen name="SignUp_Individual" component={SignUp_Individual} 
          options={{ title: 'SignUp_Individual', headerShown:false, }} /> 
        <Stack.Screen name="Bank_Detail" component={Bank_Detail} 
          options={{ title: 'Bank_Detail', headerShown:false, }} /> 
        <Stack.Screen name="Plan" component={Plan} 
          options={{ title: 'Plan', headerShown:false, }} /> 
        <Stack.Screen name="Employe_Account" component={Employe_Account} 
          options={{ title: 'Employe_Account', headerShown:false, }} /> 
    </Stack.Navigator>
  );
}


export default function App() {
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
