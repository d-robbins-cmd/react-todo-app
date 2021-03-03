import React from "react"
import TodoItem from './TodoItem'


class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {
                    this.props.todos.map( todo =>(
                        <TodoItem key={ todo.id } item={ todo } />
                    ))
                }
            </ul>
        )
    }
}

export default TodoList


