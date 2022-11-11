// import React, { Component } from "react";
// import PropTypes from 'prop-types'
// import './Counter.css'

// class Counter extends Component{

//     constructor (){
//         super();
//         this.state = {
//             counter : 0
//         }

//         this.increment = this.increment.bind(this);
//     }

//     render(){
//         return(
            
//          <div className='counter'>
//          <CounterButton by={1} incrementMethod={this.increment}/>
//          <CounterButton by={5} incrementMethod={this.increment}/>
//          <CounterButton by={10} incrementMethod={this.increment}/>
//          <span className="count">{this.state.counter}</span>
//          </div>
//         );
//       }

//       increment(by){
//        //console.log(`increment from child - ${by}`)
//         this.setState({
//             counter: this.state.counter + by
//         });

//     }

// }

// class CounterButton extends Component{

//     constructor (){
//         super();
//         this.state = {
//             counter : 0
//         }

//         this.increment = this.increment.bind(this);
//        // this.decrement = this.decrement.bind(this);
//        // this.reset = this.reset.bind(this);
//     }

//     render(){
 
//     return(
//         <div className="counter">
//             <button onClick={this.increment}>+{this.props.by}</button>
//             {/* <button onClick={this.decrement}>-1</button>
//             <button onClick={this.reset}>RESET</button> */}
//             <span className="count">{this.state.counter}</span>
//         </div>
//     )
// }

//  increment(){

//     //console.log('increment');
//     //this.state.Counter++;
//     this.setState({
//         counter: this.state.counter + this.props.by
//     });

//     this.props.incrementMethod(this.props.by);



// // }


// // decrement(){

// //     //console.log('increment'); 
// //     //this.state.Counter++;
// //     this.setState({
// //         counter: this.state.counter - 1
// //     });

// // }

// // reset(){

    
// //     this.setState({
// //         counter: this.state.counter * 0
// //     });

//  }

// }

// CounterButton.defaultProps = {
//     by : 1
// }

// CounterButton.propTypes = {
//     by : propTypes.number
// }


// export default Counter;