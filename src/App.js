import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {


  const [message,setMessage]=useState("");

  const handldeClick=(excuse)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res)=>{
      setMessage(res.data[0].excuse)
    })
  }


  return (
    <div className="App">
      <h1>Generate excuse</h1>
      <button onClick={()=>handldeClick("party")}>party</button>
      <br />
      <button onClick={()=>handldeClick("family")}>family</button>
      <br />
      <button onClick={()=>handldeClick("office")}>office</button>
      <h1>{message}</h1>

    </div>
  );
}

export default App;
