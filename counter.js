import { useState} from 'react'
import './App.css';



const New = () => { 
         const [counter,setCounter]=useState(0);
        return(
               <>
                 <button onClick={()=>setCounter((counter)=>counter+1)}>+</button>
                 <h1>{counter}</h1>
                 <button onClick={()=>setCounter((counter)=>counter-1)}>-</button>
               </>
        )
}


export default New;
