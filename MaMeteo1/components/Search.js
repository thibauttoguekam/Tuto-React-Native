import React from 'react'
import { TextInput, Image, Button, View, Keyboard} from 'react-native'
import Style from './Css/Style'
import {StackNavigator}from 'react-navigation' 
import List from '../components/List'



 
  class Search extends React.Component{
    
    static navigationOptions = {
        title: 'Recherche une ville',
       
        tabBarIcon: () => {
          return   <Image source={require('./icons/home.png')} style={{width:20,height:20}}/>
         }
     }


     constructor (props){
         super(props)
         this.state = {
             city: 'Montpellier'
         }
     }
     

submit (){
Keyboard.dismiss()
  this.props.navigation.navigate('Result', {city: this.state.city})
}




setCity(city){
    this.setState({city})
}
render(){
    return (
    <View style={Style.container}>
        <TextInput
        onChangeText={(text)=> this.setCity(text)}
        onSubmitEditing={() => this.submit}
        style={Style.imput}
        value = {this.state.city}
      />
       <View  tyle={Style.buttonContainer}>
      <Button  color={Style.color} onPress={() => this.submit()} title="Recherhce une ville"/>
       </View>
      </View>
    )
}
}


const navigationOption = {
    headerStyle: Style.header,
    headerTitleStyle: Style.headerTitle
  }

export default StackNavigator({
    
    Search : {
        screen: Search,
        navigationOptions: {
            headerStyle: Style.header,
            headerTitleStyle: Style.headerTitle
        }
        
    }, 

    Result:{
        screen: List,
        navigationOptions: {
            headerStyle: Style.header,
            headerTitleStyle: Style.headerTitle
        }
    },
       
    

})