import { SafeAreaView,StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { TextInput } from 'react-native'

export default function NetflixLogin() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        
        <View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
          <Image style={{width:30,height:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/welcome-screen/Image/icons8-ellipsis-50.png')}></Image>
          <View>
            <Text style={{fontSize:20, color:'#ff1493', fontWeight:'600'}}>Current Location</Text>
            <Text>Fauji Foundation College</Text>
          </View>
          <Image style={{width:30,height:30, marginLeft:50}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/welcome-screen/Image/Home.png')}></Image>
        </View>
        <View style={{flexDirection:'row', paddingLeft:10, marginLeft:20, marginRight:20, borderRadius:100,alignItems:'center', height:35,backgroundColor:'silver'}}>
          <Image style={{width:30,height:30}} source={require('/Users/khayam/Desktop/abc/Mad-Lab/MAD_Lab/React Native/welcome-screen/Image/search.png')}></Image>
          <TextInput placeholder='Search for shops and restaurants'>
          </TextInput>
      </View>
      </View>
      <View style={{height:.5, width:'100%',backgroundColor:'black'}}></View>

      <View style={{height:260, margin:15, flexDirection:'row'}}>
        <View style={{flex:.5,backgroundColor:'#ff1493', borderRadius:10,margin:10, justifyContent:'flex-end'}}>
          <Text style={{marginLeft:10,marginRight:12, color:'white', fontSize:20}}>Food Delivery</Text>
          <Text style={{marginLeft:10,marginRight:12, color:'white', marginTop:5,fontSize:15}}>Order from</Text>
          <Text style={{marginLeft:10,marginRight:2, color:'white', marginTop:5, fontSize:15, marginBottom:15}}>Your favouret rest...</Text>
        </View>
        <View style={{flex:.5,backgroundColor:'pink', borderRadius:10,margin:10,justifyContent:'flex-end'}}>
          <Text style={{marginLeft:10,marginRight:12, color:'black', fontSize:20}}>Pick-Up</Text>
          <Text style={{marginLeft:10,marginRight:12, color:'black', marginTop:5, fontSize:15, marginBottom:15}}>Your food</Text>
        </View>
      </View>

      <Text style={{marginLeft:20, fontSize:20, fontWeight:'500'}} >Your Daily Deals</Text>
      <View style={{height:210, margin:15, flexDirection:'row'}}>
        <View style={{width:130,backgroundColor:'#ff1493', borderRadius:10,margin:10,justifyContent:'flex-end'}}>
        <Text style={{marginLeft:10,marginRight:12, color:'black', fontSize:20,textAlign:'center'}}>Tap to</Text>
          <Text style={{marginLeft:10,marginRight:12, color:'black', marginTop:5, textAlign:'center',fontSize:15, marginBottom:15}}>Reveal code!</Text>
        </View>

        <View style={{width:130,backgroundColor:'#ff1493', borderRadius:10,margin:10, justifyContent:'flex-end', alignItems:'center'}}>
        <Text style={{marginLeft:10,marginRight:12, color:'black', fontSize:20,textAlign:'center'}}>New on</Text>
          <Text style={{marginLeft:10,marginRight:12, color:'black', marginTop:5,textAlign:'center', fontSize:15, marginBottom:15}}>Food Panda</Text>
          <Text style={{borderRadius:20,textAlign:'center', width:50, height:20, marginBottom:20,
          backgroundColor:'white'}}>Hello</Text>
        </View>

        <View style={{width:130,backgroundColor:'#ff1493', borderRadius:10,margin:10, justifyContent:'flex-end', alignItems:'center'}}>
        <Text style={{marginLeft:10,marginRight:12, color:'black', fontSize:20,textAlign:'center'}}>Pay jjjjj</Text>
          <Text style={{marginLeft:10,marginRight:12, color:'black', marginTop:5,textAlign:'center', fontSize:15, marginBottom:15}}>Your lllll</Text>
          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    height:'18%',
    width:'100%',
    backgroundColor:'white'
  }

})