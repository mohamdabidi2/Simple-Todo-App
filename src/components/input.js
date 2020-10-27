// import React, { Component } from 'react';
// class Input extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          inputValue:""
//         }
//    }

//    render() { 
//       return (
//          <div>
//             <input onChange={(e)=>this.setState({inputValue:e.target.value})} type="text"/>
//             <button onClick={()=>this.props.addFn(this.state.inputValue)}>ADD</button>
//          </div>
//         );
//    }
// }
 
// export default Input;




import React, { useState } from 'react';

const Input = (props) => {
   const [InputValue, setInputValue] = useState("")
   return ( 
      <div>
         <input onChange={(e)=>setInputValue(e.target.value)} type="text"/>
         <button onClick={()=>props.add(InputValue)}>Add</button>
      </div>
    );
}
 
export default Input;