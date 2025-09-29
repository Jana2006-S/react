import { useState } from "react";

function Hii(props)
{
  const [Purchased,setPurchased]=useState(false)
  const [Discount,setDiscount]=useState(props.rs)
  function Buynow(discount)
  {
    console.log("Purchased with",discount)
    setDiscount(Discount-discount)
    setPurchased('true')
  }
  return(
     <>
       {props.id}-
       {Discount}-
       {props.name}
       <button onClick={()=>Buynow(20)}>Discount</button>
       <button onClick={()=>props.del(props.id)}>Delete</button>
       <h2>{Purchased?"Already purchased":"Buy now"}</h2>
     </>
  );
}
export default Hii;
