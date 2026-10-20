import React from 'react'

export const Event = () => {

const greet = () =>{
    alert("heyy")
}

const inputEvent = (...hy) =>{
    console.log(hy)
}

  return (
  <>
    <button onClick={greet} >Click Me</button>
    <input type="text" onChange={(e)=>{
        console.clear()
        console.log(e.target.value)
        inputEvent("fabiha", "areeba","hamna")
    }}/>
    </>
  )
}
export default Event