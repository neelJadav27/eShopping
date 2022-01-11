import React,{ Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/Home";
import Product from "./src/Product";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./src/Profile";
import { createStackNavigator } from "react-navigation-stack";

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" options={{ title: 'My home' }} >
            <Drawer.Screen name="Home" component={Home} options={{ title: 'My home' }}/>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Product" component={Product}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

