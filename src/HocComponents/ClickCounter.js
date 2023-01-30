import React from 'react'
import Hoc from './Hoc'
function ClickCounter(props){
    const Counter=props.Counter;
    const UpdateCounter=props.UpdateCounter;
    return (
        <div>{Counter}
        <div><button onClick={UpdateCounter}>Click Me!!</button></div>
        </div>
    )
}

export default Hoc(ClickCounter);