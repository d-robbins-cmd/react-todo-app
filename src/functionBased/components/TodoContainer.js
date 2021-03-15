import React, { useState, useEffect } from "react"
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from 'uuid'
import { Route, Switch } from 'react-router-dom'
import NotFound from '../Pages/NotFound'
import About from '../Pages/About'
import Navbar from '../components/Navbar'
import { FaNotesMedical } from "react-icons/fa"

const TodoContainer = () => {

    const [ todos, setTodos ] = useState( getInitialTodos() )

    useEffect(() => {
        const temp = JSON.stringify( todos )
        localStorage.setItem( "todos", temp )
    }, [ todos ] )  


    function getInitialTodos(){
        const temp = localStorage.getItem("todos")
        const browserTodos = JSON.parse( temp )
        return browserTodos || []
    }

    const handleChange = id => {
      setTodos( prevState =>
        prevState.map( todo => {
          if ( todo.id === id ) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        })
      )
    }
  
    const delTodo = id => {
      setTodos([
        ...todos.filter( todo => {
          return todo.id !== id
        }),
      ])
    }
  
    const addTodoItem = title => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      }
      setTodos([...todos, newTodo])
    }
  
    const setUpdate = ( updatedTitle, id ) => {
      setTodos(
        todos.map( todo => {
          if ( todo.id === id ) {
            todo.title = updatedTitle
          }
          return todo
        })
      )
    }

    return (
      <>

      <Navbar/>

      <Switch>

        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={ addTodoItem } />
              <TodoList 
                todos={todos} 
                handleChangeProps={ handleChange } 
                deleteTodoProps={ delTodo }
                setUpdate ={ setUpdate } 
              />
            </div>
          </div>
        </Route>

        <Route path= "/about">
          <About />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>

      </>
    )
  }
  
  export default TodoContainer
