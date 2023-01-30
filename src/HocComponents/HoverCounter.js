import React from 'react'
import Hoc from './Hoc';
const HoverCounter = (props) => {
    const {Counter,UpdateCounter}=props;
    return (
        <div>{Counter}
        <div><button onMouseOver={UpdateCounter}>Click Me on Hover!!</button></div>
        </div>
    )
}

export default Hoc(HoverCounter)