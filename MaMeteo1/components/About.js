import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
import Style from './Css/Style'

export default class About extends React.Component{


     static navigationOptions = {
        tabBarIcon: () => {
          return   <Image source={require('./icons/about.png')} style={{width:20, height:20}}/>
         }
     }
     
  search(){
      this.props.navigation.navigate('Search')
  }

   render(){
  return (
  <View style={Style.container}>
      <Text style = {Style.title}> A propos de moi </Text>
      <Text> Cette application permet de determine la météo d'une entrée par l'utilisateur
    </Text>
<Button color={Style.color}onPress={() => this.search()} title="Recherhce"/>
</View>

  )

    }
}

