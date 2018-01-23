import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types';
import moment from 'moment'
import golbalStyle from '../Css/Style'
import FadeInView from '../animation/fadeInView'



export default class Row extends React.Component{

static propTypes ={
    day : PropTypes.object,
    index: PropTypes.number
}


icon(size){
    const type = this.props.day.weather[0].main.toLowerCase()

    let image 
     switch(type){
      
       case 'clouds':
       image = require('./icons/clouds.png')
        break;
       
        case 'rain':
           image =require('./icons/rain.png')
           break;

        default :
          image = require('./icons/clear.png')
     }

    return (
        <Image source={image} style={{width: size, height: size}} />
    )
}

day(){
    let day = moment(this.props.day.dt*1000).format('ddd')

    return (<Text  style={[style.white, style.bold]}> {day.toUpperCase()}</Text>)
}

date(){
    let date = moment(this.props.day.dt*1000).format('DD/MM')

    return (<Text> {date}</Text>)
}
    render(){

         if(this.props.index === 0){
           
            return(
                
                <View style = {[style.view, style.flex, style.firstView]}>
                   <View> 
                   <Text color={style.white}> {this.day()} {this.date()} </Text>
                    {this.icon(100)}    
                 </View>
               <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.main.temp)}°c </Text>   
                </View>
           
            )  
         }
         else{
        return(
           
            <View style = {[style.view, style.flex]}>
               <View style ={style.flex}> 
                {this.icon(70)}
              <Text sytle={style.marginleft}> {this.day()} {this.date()} </Text>    
             </View>
           <Text style={style.temp}>{Math.round(this.props.day.main.temp)}°c </Text>   
            </View>
    
        )
            }   
    }
}

const style = StyleSheet.create({

    firstView:{
         backgroundColor: '#e54b65'
    },

     marginleft: {
        marginLeft: 10
     },
    white :{
        color : '#FFF'
    },
    bold:{
        fontWeight: 'bold'
    },
 
  flex :{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

    view : {
         backgroundColor: '#394163',
         borderWidth: 0,
         borderBottomWidth: 1,
         borderBottomColor : '#202340',
         paddingHorizontal: 20,
         paddingVertical: 10,
         justifyContent: 'space-between'
    },
 temp :{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize:22

 }

})