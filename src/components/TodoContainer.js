import React from "react"
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from 'uuid'

class TodoContainer extends React.Component{

    state = {
        todos: []
    }

    componentDidUpdate( prevProps, prevState ){
        if( prevState.todos !== this.state.todos ){
            localStorage.setItem( "todos", JSON.stringify( this.state.todos ))
            console.log( "componentDidUpdate" )
        }
    }

    //immediately after component is put into the DOM
    componentDidMount(){
        const temp = localStorage.getItem( "todos" )
        const loadedTodos = JSON.parse( temp )
        if ( loadedTodos ){
            this.setState({
                todos: loadedTodos
            })
        }
        console.log( 'componentDidMount' )
    }



    setUpdate = ( updatedTitle, id ) =>{
        this.setState({
            todos: this.state.todos.map( todo =>{
                if ( todo.id === id ){
                    todo.title = updatedTitle
                }
                return todo
            })
        })
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

    render() {
        return (
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo inputTodoProps={ this.addTodoItem } />
              <TodoList
                todos={ this.state.todos }
                handleChangeProps={ this.handleChange }
                deleteTodoProps={ this.deleteTodo }
                setUpdateProps={ this.setUpdate }
              />
            </div>
          </div>
        );
      }

}

export default TodoContainer