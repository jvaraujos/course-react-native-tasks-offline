import React,{Component} from 'react'
import {  SafeAreaView,Text,StyleSheet,ImageBackground, View } from 'react-native'
import TodayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'

export default class TaskList extends Component{
    render (){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
        <SafeAreaView style={styles.container}>
        <ImageBackground source={TodayImage} style={styles.image}>
            <View style={styles.titleBar}>
                <Text>Hoje</Text>
                <Text>{today}</Text>
            </View>
            </ImageBackground>
        <View style={styles.taskList}>
            <Text>React</Text>
        </View>
        </SafeAreaView>
     )
}
}
const styles = StyleSheet.create({
    container:{
        flex:1
     },
     image: {
        flex: 3,
      },
     taskList:{
         flex:7
     },
     titleBar :{
         flex:1,
         justifyContent: 'flex-end',
     }
    })