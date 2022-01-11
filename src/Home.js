import React,{ Component } from "react";
import { View,StyleSheet,Text,TouchableOpacity,Dimensions,Image,} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";
import { FlatList,Pagination, ScrollView  } from "react-native-gesture-handler";

const flatList_horizontal = [
    {
        name:'Egg',
        icons:'egg'
    },
    {
        name:'Flower',
        icons:'flower'
    },
    {
        name:'Games',
        icons:'game-controller'
    },
    {
        name:'Headset',
        icons:'headset'
    },
    {
        name:'Medical',
        icons:'medical',
    },
]

export default class Home extends Component{
    static navigationOptions = {

        header: 'Home',
        
    };

    
    state = {
        carousel:[
            {
                imageOffer: require('../offers/first.jpg')
            },
            {
                imageOffer: require('../offers/second.png'),
            },
            {
                imageOffer: require('../offers/third.jpg')
            },
            {
                imageOffer: require('../offers/fourth.jpg')
            },
        ],
        data:flatList_horizontal,
    }

    renderCarousel = ({item}) => {
            return(
        <View style={styles.carouselViewStyle}>
            
            <Image source={item.imageOffer} style={styles.imageCarousel}/>
        </View>
    )}
    
    pagination(){
        const activeSlide = this.state;
        return(
            <Pagination
                dotsLength={this.state.carousel.length}
                 activeDotIndex={activeSlide}
                containerStyle={{backgroundColor:'rgba(0,0,0,0.75)'}}
                dotStyle={{
                    width:10,
                    height:10,
                    borderRadius:5,
                    marginHorizontal:8,
                    backgroundColor:'rgba(255,255,255,0.92)'
                }}  
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                />
        );
    }

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.flatListHori}>
                   <FlatList 
                        horizontal={true}
                        data={this.state.data}
                        renderItem={({item:rowData})=> {
                            return(
                                <View style={{marginLeft:45,marginTop:10,marginBottom:10, alignItems: 'center',}}>
                                    <TouchableOpacity onPress={()=> alert(rowData.name)}>
                                       <View style={{justifyContent:'center',alignItems: 'center',}}>
                                            <Icon name={rowData.icons} size={30} />
                                        </View>
                                        <Text style={{fontSize:25, marginLeft:5,marginTop:3,}}>{rowData.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        keyExtractor={(item,index)=>index.toString()}
                    />
                </View> 
                <View style={styles.options}>
                        <View style={styles.option1}>
                                <TouchableOpacity onPress={()=> alert('Phone')} style={{alignItems: 'center',}}> 
                                    <View style={styles.iconborder}>
                                        <Icon name='musical-notes' size={30} />
                                    </View>
                                    <Text>Music</Text>
                                </TouchableOpacity >
                                <TouchableOpacity onPress={()=> alert('Recharge')} style={{alignItems:'center',}}> 
                                    <View style={styles.iconborder}>
                                        <Icon name='pizza' size={30}  />
                                    </View> 
                                    <Text>Pizza</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> alert('Party')} style={{alignItems:'center',}}> 
                                    <View style={styles.iconborder}>
                                        <Icon name='shirt' size={30} />
                                    </View>
                                    <Text>Shirt</Text>
                                </TouchableOpacity>
                        </View>
                        <View style={styles.option2}>
                                <TouchableOpacity onPress={()=> alert('Phone')} > 
                                    <View style={styles.iconborder}>
                                            <Icon name='tv' size={30} />
                                    </View>
                                    <Text>Television</Text>
                                </TouchableOpacity >
                                <TouchableOpacity onPress={()=> alert('Recharge')} style={{alignItems:'center',}}> 
                                    <View style={styles.iconborder}>
                                        <Icon name='wallet' size={30}  />
                                    </View>
                                    <Text>Wallet</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> alert('Party')} style={{alignItems:'center',}}> 
                                    <View style={styles.iconborder}>
                                            <Icon name='images' size={30} />
                                    </View>
                                    <Text>Images</Text>
                                </TouchableOpacity>
                        </View>
                </View>

                <View>
                <Carousel
                     ref={(c) => { this._carousel = c; }}
                     data={this.state.carousel}
                     renderItem={this.renderCarousel}
                     sliderWidth={Dimensions.get('window').width}
                     onSnapToItem={(index) => this.setState({ activeSlide: index.toString() }) }
                     itemWidth={400}
                    >
                        {this.pagination}
                    </Carousel>    
                </View>
               
                <View style={{flexDirection:'row', marginTop:10,justifyContent:'space-around',height:60,alignItems: 'center',}}>
                    <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#ADDFFF',height:50,alignItems: 'center',justifyContent:'flex-start',width:170,borderRadius:15,}} onPress={()=> alert('Paytm Money')}>
                            <Icon name="language" size={30} style={{marginLeft:10}}/>
                            <Text style={{marginLeft:10}}>Paytm Money</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#ADDFFF',height:50,alignItems: 'center',justifyContent:'flex-start',width:170,borderRadius:15,}} onPress={()=> alert('Paytm Money')}>
                            <Icon name="golf" size={30} style={{marginLeft:10}}/>
                            <Text style={{marginLeft:10}}>Best Deals</Text>
                    </TouchableOpacity> 
                </View>


                <View style={{flexDirection:'row', marginTop:10,justifyContent:'space-around',height:60,alignItems: 'center',}}>
                    <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#ADDFFF',height:50,alignItems: 'center',justifyContent:'flex-start',width:170,borderRadius:15,}} onPress={()=> alert('Paytm Money')}>
                            <Icon name="language" size={30} style={{marginLeft:10}}/>
                            <Text style={{marginLeft:10}}>Paytm Balance</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#ADDFFF',height:50,alignItems: 'center',justifyContent:'flex-start',width:170,borderRadius:15,}} onPress={()=> alert('Paytm Money')}>
                            <Icon name="golf" size={30} style={{marginLeft:10}}/>
                            <Text style={{marginLeft:10}}>Offers </Text>
                    </TouchableOpacity> 
                </View>
             
            </View>
            </ScrollView>
        );
    }
}

const styles= StyleSheet.create({

    container:{
        flex:1,
    },  
    flatListHori:{
        marginTop:20,
        width:'97%',
        backgroundColor:'#ADDFFF',
        justifyContent:'center',
        alignContent:'center',
        marginLeft:5,
        marginRight:15,
        borderRadius:15,
        paddingRight:30,
    },
    options:{
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.90,
        shadowRadius: 0.65,
        elevation: 5,
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        borderRadius:15,
    },
    option1:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:'space-around',
    },
    option2:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:20,
        justifyContent:'space-around',
    },
    iconborder:{
        backgroundColor:'#ADDFFF',
        borderRadius:40,
        marginBottom:3,
        width:60,
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCarousel:{
        position: 'absolute',
        height:150,
        width:'100%',
        borderRadius:10,
    },
   
    carouselViewStyle:{
        backgroundColor:'rgba(0,0,0,0.6)',
        width:'100%',
        height:150,
        marginTop:20,
        borderRadius:10,
    },
    floatingButtonStyle:{
        resizeMode:'contain',
        width: 50,
        height: 50,
    },
    touchableFloat:{
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
   
})