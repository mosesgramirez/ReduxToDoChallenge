import * as ActionTypes from './ActionTypes'

const initialState = {
  todo: []
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Add the cases to match with the code
    case ActionTypes.ADD_TODO:
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }
    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }
    case ActionTypes.CLEAR_TASKS:
      return { ...state, todo: state.todo.map(task => ({ ...task, complete: false })) }
      // Delete individual task
    // case ActionTypes.ERASE_COMPLETED:
    //   let completedTodo = [...state.todo]
    //   completedTodo.filter(task => (task !== completedTodo[action.payload].complete))
    //   return { ...state, todo: completedTodo }
    case ActionTypes.DELETE_TASKS:
      // TASK implement the final action type
      return { ...state, todo: [] }
    default:
      return state
  }
}
