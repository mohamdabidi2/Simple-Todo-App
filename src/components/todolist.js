import React, { useState,useEffect } from 'react'
const Todolist = (props) => {

 
   return ( 
      <div>
{props.todolist.map(el=>

      <div>
      <p>{el}</p>
      </div>
      )}
      </div>
    );
}
 
export default Todolist;