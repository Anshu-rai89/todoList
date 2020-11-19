import {ADD_TASK}  from '../actions';
const intialState={
    tasks:[]
}

export default function task(state=intialState,action){
    switch (action.type){
        case ADD_TASK:
            return {
                tasks:[...state.tasks,action.task]
            }

        default:
            return state;
    }
}