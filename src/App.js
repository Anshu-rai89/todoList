import React, { Component } from 'react';
import Task from './components/task';
import {addtask} from './actions';
import {connect} from 'react-redux';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      task:''
    }
    
  }

  handleOnChange=(e)=>{
     
    this.setState({task:[e.target.value]});
  }

  handleClick=()=>{
    const {task}=this.state;
    // check if task is empty

    if(task===''){alert("task is empty")}

    else{
      console.log('dispatch',this.props);
     this.props.dispatch(addtask(task));
    
   
    }

  }

  handleDelete=(task)=>{
    // use filter to filter out task from array

  }
  render() {
   const {task}=this.state;
   const {tasks}=this.props;
   console.log('dispatch',this.props);
    console.log('task',task);

    return (
      <div style={{margin:'10%'}}>
        
        <input  onChange={this.handleOnChange}/>
        <button onClick={this.handleClick}>Add Task</button>
 {tasks.map((task)=>
       <Task task={task} handleDelete={this.handleDelete}/>
 )}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tasks:state.tasks,
    value:state.value
  }
}

export default connect (mapStateToProps)(App);