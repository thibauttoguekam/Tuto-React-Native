import React from 'react'
import { Text, ActivityIndicator, ListView, View, StyleSheet, Image } from 'react-native'
import Style from './Css/Style'
import axios from 'axios'
import WeatherRow from './weather/Row'
import { setTimeout } from 'core-js/library/web/timers';


export default class List extends React.Component{

    static navigationOptions = ({navigation})=>{

       return { 
            title : `Meteo  / ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return   <Image source={require('./icons/home.png')} style={{width:20,height:20}}/>
               }
        }   
    }

     constructor(props){
         super(props)

         console.log ('state', this.props.navigation.state)
         this.state = {
             city: this.props.navigation.state.params.city,
             report : null
         }

         setTimeout(() => {
             this.fetchWeather()
         }, 1000)
     }

     fetchWeather(){
          axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&cnt=30&units=metric&APPID=565c712c8e37391838d9e6fb7b04233c`) 
            .then((response) => {
               this.setState({report: response.data})
               console.log(this.state.report)
            })
        }



    render(){

      if(this.state.report === null){
         return ( <ActivityIndicator color = {Style.color} size="large"/>)
      }  else{
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       
        return ( 
            <View> 
            <ListView
            dataSource={ ds.cloneWithRows(this.state.report.list)}
            renderRow={(row, j,k) => <WeatherRow day={row} index={parseInt(k, 10)}/>}
          />
          </View>

        )
      }  
    }
}

