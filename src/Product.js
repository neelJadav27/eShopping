import React,{ Component } from "react";
import { View,StyleSheet,Text,TouchableOpacity } from "react-native";

export default class Product extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Welcome to Product Screen</Text>
                <TouchableOpacity onPress={()=>this.navigation.navigate('Home')}>
                    <Text >Go to Product Screen</Text>
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