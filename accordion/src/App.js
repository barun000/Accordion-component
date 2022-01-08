import React , {useState} from 'react';
import './style.css';
import Accordion from './Accordion';

export default function App() {
  const [active,setActive]=useState("");
  return (
    <div className="App">
     <Accordion title="Title 1" active={active} setActive={setActive}/>
     <Accordion title="Title 2" active={active} setActive={setActive}/>
     <Accordion title="Title 3" active={active} setActive={setActive}/>
     <Accordion title="Title 4" active={active} setActive={setActive}/>
    </div>
  );
}

