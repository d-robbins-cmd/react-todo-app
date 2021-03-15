import React from 'react'
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"


class TodoItem extends React.Component{

    state = {
        editing: false
    }

    handleEditing = () => {
        this.setState({
            editing: true
        })
    }

    handleUpdatedDone =  e  =>{
        if ( e.key === "Enter" ){
            this.setState({
                editing: false
            })
        }
    }

    render(){

        const { id, title, completed } = this.props.todo

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        let viewMode = {}
        let editMode = {}

        if ( this.state.editing ){
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        return(

            <li className={ styles.item }>

                <div onDoubleClick={ this.handleEditing } style={ viewMode }>

                    <input type="checkbox"
                        className={ styles.checkbox } 
                        checked={ completed } 
                        onChange={ () => this.props.handleChangeProps( id ) }
                    />

                    <span style={ completed ? completedStyle : null }>
                        { this.props.todo.title }
                    </span>

                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                        <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                    </button>

                </div>

                <input 
                    type="text" 
                    style={ editMode }
                    className={ styles.textInput }  
                    value={ title }
                    onChange={ e => { this.props.setUpdateProps( e.target.value, id ) }}
                    onKeyDown={ this.handleUpdatedDone }
                />

            </li>
        )
    }
}

export default TodoItem