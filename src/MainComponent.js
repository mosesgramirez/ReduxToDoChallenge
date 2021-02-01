import React, { Component } from 'react'
import { connect } from 'react-redux'
// Task:  Import functions from ActionCreators
import { addTodo, toggleToDo, clearAllTasks, deleteAllTasks } from './redux/ActionCreators';

// Task: Assign reducer to prop
const mapStateToProps = (state) => {
  console.log('mapStateToProps - state', state)
  return {
    ToDo: state.ToDo
  }
}

// Task: add functions to dispatch
const mapDispatchToProps = {
  addTodo, 
  toggleToDo, 
  clearAllTasks, 
  deleteAllTasks
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: '',
    }
  }

  handleSubmit() {
    if (this.state.todoInput.length > 0) {
      // Task: dispatch the state value to the action creator
      this.props.addTodo(this.state.todoInput);
      this.setState({ todoInput: '' });
    }
  }

  render() {
    console.log("this.props.ToDo.todo", this.props.ToDo.todo)
    console.log('toggleToDo', toggleToDo)
    return (
      <div className='App'>
        <h1>Redux To Do List</h1>
        <ul>
          {/* Task: map through the list displaying the list item. don't forget the unique key*/}
          {this.props.ToDo.todo.map((listItem, index) => {
            return (
                <li key={index}>
                  <input
                    type='checkbox'
                    // Task: replace true with the property used to show completion
                    checked={listItem.complete}
                    // Task: dispatch toggle instead of console.log. Use the index of the array
                    onChange={() => this.props.toggleToDo(index)}
                  />
                  {listItem.activity}
                </li>
             )
            })}

          <div className='AddField'>
            <input
              type='text'
              onChange={(e) => this.setState({ todoInput: e.target.value })}
              value={this.state.todoInput}
            />
            <div>
              <button onClick={() => this.handleSubmit()}>Add To Redux</button>
              <button onClick={() => this.props.clearAllTasks()}>
                Clear Complete
              </button>
              <button onClick={() => this.props.deleteAllTasks()}>
                Clear List
              </button>
            </div>
          </div>
          <div>
            <br />
            Redux Challenge
            <br />
            <br />
            <div>
              <div>Add Tasks to list</div>
              <div>Status of task in Redux</div>
              <div>Ability to clear completed tasks</div>
              <div>Ability to remove all tasks</div>
              <div>Extra:</div>
              <div>Ability to remove single tasks</div>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}

// Task: Connect this function to redux
export default (connect(mapStateToProps, mapDispatchToProps)(Main));
