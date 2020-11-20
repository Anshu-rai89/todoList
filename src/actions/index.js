// action type
export const ADD_TASK='ADD_TASK';

export function addtask(task){
    return {
        type:ADD_TASK,
        task
    }
}