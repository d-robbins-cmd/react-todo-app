import React from 'react'


class TestComponent extends React.Component{

    state = {
        name: "darryl", 
        age: 47
    }

    render(){
        return(
            <div>{ this.state.name } is { this.state.age} years old.</div>
        )
    }


}

export default TestComponent