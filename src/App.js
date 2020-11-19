import React, { Component } from 'react';
import {Task} from './components/task';
import {connect} from 'react-redux';
import {addTask} from './actions';
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
    
      this.props.dispatch(addTask(task));
    }

  }

  handleDelete=(task)=>{
    // use filter to filter out task from array

  }
  render() {
   const {tasks}=this.props;
    
    return (
      <div style={{margin:'10%'}}>
        
        <input  onChange={this.handleOnChange}/>
        <button onClick={this.handleClick}>Add Task</button>
 { tasks.map((task)=>
       <Task task={task} handleDelete={this.handleDelete}/>
 )}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tasks:state.tasks
  }
}
export default connect (mapStateToProps)(App);