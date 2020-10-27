
// import './App.css';
// import Input from './components/input';
// import Todolist from './components/todolist';
// import React, { Component } from 'react';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       todolist:[]
//      }
//   }
//   add=(x)=>{
// this.setState({
//   todolist:[...this.state.todolist,x]
// })
// console.log(x)
//   }




//   render() { 
//     return (
//       <div className="App">
//   <Input addFn={this.add} />
//   <Todolist list={this.state.todolist}/>
//       </div>
//     );
//   }
// }
// export default App;


import React, { useState } from 'react';
import Input from './components/input';
import Todolist from './components/todolist';
const App = (props) => {

  const [list, setList] = useState([])
  const add=(x)=>{
    setList([...list,x])
    console.log(x)
  }
  return ( 
    <div>
      <Input add={add}/>
      <Todolist  todolist={list}/>

    </div>
   );
}
 
export default App;
