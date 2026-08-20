import { useState } from "react"


const EventsFunctionsState = () => {
  const [firstName, setFirstName] = useState('Alex');
  // const sayHello = (name) => {
  //     alert(`Hello From ${name}`);
  // }
  // let firstName = 'Alex';
  const changeName = () => {
     setFirstName("Tovino")
  }
  return (
    <>
        <h2>Events Functions & State</h2>
        {/* <button onClick={() => alert("Hello")}>Click Me</button> */}
        {/* <button onClick={() => sayHello('Alex')}>Click Me</button> */}
        <h3>My Name Is: {firstName} </h3>
        <button onClick={changeName}>Click Me</button>
    </>
  )
}

export default EventsFunctionsState