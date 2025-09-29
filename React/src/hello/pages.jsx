import { useState } from "react";

const Events = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const handleBlur = () =>
  {
    
     console.log("Input field has lost focus");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@")){
      setVisible(!visible);  

    }
    else{
      console.log("invalid email")
    }
  }
  const resetValue = ()  => {
    setName("");
    setEmail("");
    setVisible(false);
  }

  const Dummy = (sssss) => {
    console.log("value of e----",sssss.target.value)
  }
  return (
    <>
      <form>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
          
          />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}

          
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <input type="button" onClick={resetValue} value="Reset"/>


        <input type="text" onClick={Dummy}/>
      </form>

      {visible && (
        <>
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
        </>
      )}
    </>
  );
};

export default Events;