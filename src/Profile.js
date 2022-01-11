import React,{ Component } from "react";
import { View,StyleSheet,Text,TouchableOpacity } from "react-native";

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Welcome to Profile Screen</Text>
                <TouchableOpacity onPress={()=>this.navigation.navigate('Home')}>
                    <Text >Go to Home Screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles= StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})