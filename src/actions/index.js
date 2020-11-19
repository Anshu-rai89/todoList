export const ADD_TASK = 'ADD_TASK';
export function addTask(task){
    return {
        type:ADD_TASK,
        task
    }
}