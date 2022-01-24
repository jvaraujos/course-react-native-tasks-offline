import React,{Component} from 'react'
import {  SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    View,
    FlatList} from 'react-native'
import TodayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import commonStyles from '../commonStyles'
import Task from '../components/Task'


export default class TaskList extends Component{
    state = {
        tasks:[{
                id: Math.random(),
                desc:'Comprar livro de React Native',
                estimatedAt: new Date(),
                doneAt:new Date()
        },
        {
            id: Math.random(),
            desc:'Ler livro de React Native',
            estimatedAt: new Date(),
            doneAt:null
    }]
    }
    toggleTask = taskId =>{
        const tasks = [...this.state.tasks]
        tasks.forEach(task=>{
            if(task.id===taskId){
                task.doneAt=task.doneAt?null:new Date()
            }
        })
        this.setState({tasks})
    }
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
            <FlatList data={this.state.tasks}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <Task {...item} toggleTask={this.toggleTask}/>}/>
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