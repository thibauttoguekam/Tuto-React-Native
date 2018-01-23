import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import About from './components/About'
import Search from './components/Search'
import {TabNavigator, TabBarTop} from 'react-navigation'

const Tabs = TabNavigator({
  Search: {screen: Search},
  About: {screen: About}
},
{ 
  tabBarComponent: TabBarTop,
 tabBarOptions:{ 
 showIcon: true,
 showLabel: false,
 indicatorStyle:{
   height: 2,
   backgroundColor: '#FFF'
 },
 style:{
   backgroundColor: "#a2273c",
   borderColor: "#3f101c"
 }
},

})


export default class App extends React.Component {

  
  render() {
    return (
    <View style={{flex: 1}}>
      <StatusBar hidden= {true}/>
     <Tabs />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
