import logo from './logo.svg';
import './App.css';
import Content from './Content';
import {useState} from 'react'
import {useEffect} from 'react'


function App() {
  const [show,setShow]=useState(false)
 
  return (
    <div  style={{padding:20}}>
      <button onClick={() =>setShow(!show)}>Toggle</button>
      { show&&<Content/>}
    </div>
  );
}

export default App;
