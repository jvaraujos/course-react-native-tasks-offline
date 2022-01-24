import React,{Component} from 'react'
import {  SafeAreaView,Text,StyleSheet,ImageBackground, View } from 'react-native'
import TodayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
export default class TaskList extends Component{
    render (){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
        <SafeAreaView style={styles.container}>
        <ImageBackground source={TodayImage} style={styles.image}>
            <View style={styles.titleBar}>
                <Text style={styles.title}>Hoje</Text>
                <Text>{today}</Text>
            </View>
            </ImageBackground>
        <View style={styles.taskList}>
        <Task desc="Comprar Livro" estimatedAt={new Date() } doneAt={new Date()}/>
        <Task desc="Ler Livro" estimatedAt={new Date() }doneAt={null}/>
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
     },
     title:{
         fontFamily:commonStyles.fontFamily,
         fontSize:50,
         color:commonStyles.colors.secondary,
         marginLeft:20,
         marginBottom:20         
     }
    })