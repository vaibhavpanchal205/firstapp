import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import LoginControl from './components/LoginControl';
import Blog from './components/Blog';
import Form from './components/Form';

function App() {
  // const [flag, setFlag]= useState(true);
  // const userInfo= {
  //  firstname: "vaibhav",
  //  lastname: "panchal",
  // };

  // const toggle = () =>{
  //   console.log("Toggle Clicked")
  //   setFlag(!flag);
  // }
  
  return(
    <>
      {/* <button onClick={toggle}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock component"} */}
      {/* <Welcome user = "vaibhav" />
      <Welcome user = "dipesh" />
      <Welcome user = "nikesh" /> */}
    </>
   
  );
}


export default App;
