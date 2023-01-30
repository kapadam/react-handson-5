import React,{useState} from 'react'

const Hoc = (WrappedComponent) => {
    function Hoc(){
        const [Counter,setCounter]=useState(0);
        const UpdateCounter=()=>{
            setCounter(Counter+1);
        }
        return (
            <div>
                <WrappedComponent Counter={Counter} UpdateCounter={UpdateCounter}/>
            </div>
          )
    }
  return Hoc;
}

export default Hoc;