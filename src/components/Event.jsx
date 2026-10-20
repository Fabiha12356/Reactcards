import React from 'react'

import p1 from "../assets/hero.png"
import p2 from "../assets/react.svg"



export const Event = () => {

const greet = () =>{
    alert("heyy")
}

const inputEvent = (...hy) =>{
    console.log(hy)
}



  return (
  <>
  {/* //onClick */}
    <button onClick={greet} >Click Me</button>
      {/* //onChange */}
    <input type="text" onChange={(e)=>{
        console.clear()
        console.log(e.target.value)
        inputEvent("fabiha", "areeba","hamna")
    }}/>
      {/* //onMouseOver */}
      <img src={p1} alt="pic" id='Image' onMouseOver={(e)=>{
e.target.src = p2
      }} onMouseOut={(e)=>{
        e.target.src = p1
      }}/>
      {/* {onsubmit} */}
      <form action="" onSubmit={(e)=>{
         e.preventDefault();

  const inputs = new FormData(e.target);
  const data = Object.fromEntries(inputs);

  console.log(data);
      }}>
        <input type="text"  placeholder='yourname' name='name'/>
        <input type="text"  placeholder='fathername' name='f-name'/>
        <button type='submit'>submit</button>
      </form>
    </>
  )
}
export default Event