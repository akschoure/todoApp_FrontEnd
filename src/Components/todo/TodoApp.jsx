import React, { Component } from "react";


class TodoApp extends Component{
    render() {
        return (
            <div className="TodoApp">
                My Todo App
                <LoginComponent></LoginComponent>
            </div>

        )
    }
}

class LoginComponent extends Component{
    render(){
        return(
            <div>
                User Name : <input type="text" name="usernamr"/>
                Password : <input type="password" name="password"/>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp