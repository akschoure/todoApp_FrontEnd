import React, { Component } from "react";


class TodoApp extends Component{
    render() {
        return (
            <div className="TodoApp">
                My Todo App
                <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent>
            </div>

        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return <div>welcome to todo App</div>
    }
}

class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: 'akshay',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        //this.handleUsernameChange= this.handleUsernameChange.bind(this)
        

        this.handleChange= this.handleChange.bind(this)
        this.loginClicked= this.loginClicked.bind(this)

    }

    handleChange(event){
        //console.log(this.state);
        this.setState(
            {
                [event.target.name] :event.target.value
            }
            )

    }

    // handlePasswordChange(event){
    //     //console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    loginClicked(){
        if(this.state.username=='akshay' && this.state.password=='ok'){
              console.log("Sucessfull");
              this.setState({showSuccessMessage:true})
              this.setState({hasLoginFailed:false})
              
        }
        else{
            console.log("Failed");
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})

        }
             
       // console.log(this.state);

    }

    render(){
        return(
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {/* <ShowLoginSuccessfullMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                 
                {this.state.hasLoginFailed && <div> Invalid Credentials </div>}
                {this.state.showSuccessMessage && <div> Login Sucessfull </div>}
                
                User Name : <input type="text" name="usernamr" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
} 

// function ShowInvalidCredentials(props){
//         if(props.hasLoginFailed){
//             return <div>Invalid Credentials</div>
//         } 
//         return null}

//     function ShowLoginSuccessfullMessage(props){
//         if(props.showSuccessMessage){
//             return <div>Login Sucessfull</div>
//         } 
//         return null}
    
export default TodoApp