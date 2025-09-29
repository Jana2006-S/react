// import Events from './hello/pages'
// import TimerApp from './hello/timer'
// import RefApp from './hello/ref'
// function App() {


//   return (
//     <>
//     <Events/>
//     <TimerApp/>
//     <RefApp/>
//     </>
//   )
// }

// export default App
import { useState,useEffect } from "react";
const App=()=>
{
    const [count,setCount]=useState(0)
    function update()
    {
         setCount(count+1)
    }
    useEffect(()=>{console.log(`count value updated to ${count}`)},[10])
    return(
        <>
        <h3>{count}</h3>
        <button onClick={update}>Increment</button>
        </>
    );
}
export default App