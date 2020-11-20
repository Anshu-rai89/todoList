import {ADD_TASK} from '../actions';

const intitalState={
    tasks:[],
    value:'something'
}

export function rootReducer(state=intitalState,action){
    switch (action.type){
        case ADD_TASK:
            return {
                tasks:[...state.tasks,action.task]
            }
         
        default:
            return state;
    }
}