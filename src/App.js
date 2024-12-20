import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import LoginControl from './components/LoginControl';
import Blog from './components/Blog';
import Form from './components/Form';
import Search from './components/Search';
import List from './components/List';

function App() {
  const [flag, setFlag]= useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) =>{
    setSearchTerm(e.target.value);
  }

  

  const userInfo= {
   firstname: "vaibhav",
   lastname: "panchal",
  };
  
  const posts =[
{
  id: 1,
  title:"Hello World",
  content:"you can ron react app with npm start",
},
{
  id: 2,
  title:"Installation",
  content:"you can ron react app with npm start",
},
{
  id: 3,
  title:"Run App",
  content:"you can ron react app with npm start",
},
{
  id: 4,
  title:"Bulid Components",
  content:"you can ron react app with npm start",
},
{
  id: 5,
  title:"Define States",
  content:"you can ron react app with npm start",
},
{
  id: 6,
  title:"React Hooks",
  content:"you can ron react app with npm start",
},
{
  id: 7,
  title:"Forms handling",
  content:"you can ron react app with npm start",
},
];
const filterList = posts.filter((item) =>{
 return item.title.toLowerCase().includes(searchTerm);
});


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
      {/* <Form /> */}
      <Search searchTerm={searchTerm} handledSearch={handleSearch}/>
      <List list={filterList}/>
    </>
   
  );
}


export default App;
