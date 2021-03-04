import React from "react"
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from 'uuid'

class TodoContainer extends React.Component{

    state = {
        todos: [ 
            {
                id: 1, 
                title: "todo thing 1", 
                completed: true
            },
            {
                id: 2, 
                title: "todo thing 2",
                completed: false
            },
            {
                id: 3, 
                title: "todo thing 3", 
                completed: false
            }
         ]
    }

    addTodoItem = title => {

        const newTodo = {
            id: uuidv4(), 
            title: title, 
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    handleChange = id => {
        this.setState( prevState => ({
            todos: prevState.todos.map( todo => {
              if ( todo.id === id ) {
                return{
                    ...todo, 
                    completed: !todo.completed
                }
              }
              return todo
            }),
          }))
    }

    deleteTodo = id =>{
        this.setState({
            todos:[
                ...this.state.todos.filter( todo =>{
                    return todo.id !== id
                })
            ]
        })
    }


    render(){
        return (
            <div>
                <Header/>
                <InputTodo 
                    inputTodoProps={ this.addTodoItem }
                />
                <TodoList 
                    todos={ this.state.todos } 
                    handleChangeProps={ this.handleChange }
                    deleteTodoProps={ this.deleteTodo }
                    />
            </div>
        )
    }
}

export default TodoContainer