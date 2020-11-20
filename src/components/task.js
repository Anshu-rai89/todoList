// @flow 
import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            editMode:false,
            updateValue:''
        }
    }
    handleClick=(e)=>{
        this.setState({editMode:true})
    }
    handleOnChange=(e)=>{
        this.setState({updateValue:[e.target.value]});
    }
    handleSave=(e)=>{
        const {updateValue}=this.state;
        console.log('updated value',updateValue
        )
    }
    render() {
        const {task,handleDelete}=this.props;
        const {editMode}=this.state;

        return (
            <div>
         
        {editMode?<div><input /> <button onClick={this.handleSave}>Save</button></div>:<div><p style={{display:"inline-block"}}>{task}</p> <button style={{display:"inline-block"}} onClick={()=>handleDelete(task)}>Delete</button> <button onClick={this.handleClick}>Edit </button></div>}
    
    </div>
        
        );
    }
}

export default Task;