import * as ActionTypes from './ActionTypes'

export const addTodo = todo => dispatch => {
  const newTodo = {
    activity: todo,
    complete: false,
  }
  dispatch({
    // Task: Create an object to dispatch. use an object in this file as an example
    type: ActionTypes.ADD_TODO,
    payload: newTodo
  })
}

export const toggleToDo = id => ({
  type: ActionTypes.TOGGLE_COMPLETE,
  payload: id,
})

export const clearAllTasks = () => ({
  type: ActionTypes.CLEAR_TASKS,
})

export const deleteCompletedTask = id => ({
  type: ActionTypes.ERASE_COMPLETED,
  payload: id,
})

export const deleteAllTasks = () => ({
  // Task: Create an object to dispatch. use an object in this file as an example
  type: ActionTypes.DELETE_TASKS
})
