import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Navigations 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack  = createStackNavigator();

//Páginas
import Login from './pages/Login';
import Home from './pages/Home';

const Autenticado = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Autenticado" component={Autenticado}/>
      </Stack.Navigator>
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
