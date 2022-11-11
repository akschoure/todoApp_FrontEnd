import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TodoApp from './Components/todo/TodoApp';


class App extends Component {
  render(){
    return(
     <div className='name'>
      
     <TodoApp></TodoApp>
     
     </div>
    );
  }
}





export default App;