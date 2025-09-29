// import { useState } from "react";
// import ExpenseForm from "./component/ExpenseForm";
// import ExpenseList from "./component/ExpenseList";
// import ExpenseTracker from "./component/ExpenseTracker";
// import Stopwatch from "./stopwatch";
// export const ExpenseContext=createContext();
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from  "./Routes/layout";
//import Home from  './Pages/Home';
//import About from './Pages/About';
//import Contact from './Pages/Contact';
import { Suspense } from 'react';
import { Home,About,Contact} from './lazy/laz' ;



/*const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Layout/>
    <Suspense fallback={<div>Loading...</div>}>
      
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          
      
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}*/
import Fetch from './api/connect'
const App=()=>
{
   return(
    <>
    <h1>Welcome to Interaction Examples</h1>
    <Fetch/>
    </>
   )
}

export default App;