import React from "react"
import TodoList from './TodoList'

class TodoContainer extends React.Component{

    state = {
        todos: [ 
            {
                id: 1, 
                title: "setup dev environment", 
                completed: true
            },
            {
                id: 2, 
                title: "develop website and add content",
                completed: false
            },
            {
                id: 3, 
                title: "deploy to live server", 
                completed: false
            }
         ]
    }


    render(){
        return (
            <TodoList todos={ this.state.todos }/>
        )
    }
}

export default TodoContainer