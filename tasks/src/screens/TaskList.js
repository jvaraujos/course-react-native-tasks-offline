import React,{Component} from 'react'
import {  SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    View,
    FlatList,
TouchableOpacity,
Platform} from 'react-native'
import TodayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddTask from './AddTask'

export default class TaskList extends Component{
    state = {
        showDoneTasks:false,
        showAddTask:true,
        visibleTasks:[],
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

    toggleFilter = ()=>{
        this.setState({showDoneTasks:!this.state.showDoneTasks},this.filterTasks)
    }
    componentDidMount = () => { 
        this.filterTasks()
    }

    filterTasks=()=>{
        let visibleTasks = null
        if(this.state.showDoneTasks){
            visibleTasks=[...this.state.tasks]
        }else{
            const pending = task => task.doneAt===null
            visibleTasks=this.state.tasks.filter(pending)
        }
        this.setState({visibleTasks})
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
        <AddTask isVisible={this.state.showAddTask}
        onCancel={()=>this.setState({showAddTask:false})}></AddTask>
        <ImageBackground source={TodayImage} style={styles.image}>
            <View style={styles.iconBar}>
                <TouchableOpacity onPress={this.toggleFilter}>
                <Icon name={this.state.showDoneTasks?'eye':'eye-slash'} size={20} color={commonStyles.colors.secondary}/>
                </TouchableOpacity>
            </View>
            <View style={styles.titleBar}>
                <Text style={styles.title}>Hoje</Text>
                <Text>{today}</Text>
            </View>
            </ImageBackground>
            
        <View style={styles.taskList}>

            <FlatList data={this.state.visibleTasks}
            keyExtractor={item=>`${item.id}`}
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
     },
     iconBar :{
        flexDirection:'row',
        marginHorizontal:20,
        justifyContent:'flex-end',
        marginTop:Platform.OS==='ios'?30:10
     }
    })