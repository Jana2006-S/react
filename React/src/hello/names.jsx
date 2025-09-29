import Hii from './new'
import { useState } from "react";
function Naming()
{
    const [Names,setNames]=useState([
        {
            id:1,
            rs:100,
            nam:"kumar"
        },
        {
            id:2,
            rs:1200,
            nam:"raghu"
        },
        {
            id:3,
            rs:1300,
            nam:"senthil"
        }
    ]);
    function handleDelete(id)
    {
        const newn=Names.filter((name)=>name.id!=id)
        setNames(newn)
    }
    const Namelist=Names.map((name)=><Hii id={name.id} rs={name.rs} name={name.nam} del={handleDelete}/>)
    return(
        <>
           {Namelist}
        </>
    );

}
export default Naming