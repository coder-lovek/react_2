import './App.css';

import { useEffect, useState } from 'react';

import  Axios  from 'axios';


function App() {
  const[catFact,setCatFact]=useState("");

  const getFact=()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact)
    })

  }

  useEffect(()=>{
    getFact();


  },[])
  return (
    <div className="App">
      <button onClick={getFact}>generate fact</button>
      <p>{catFact}</p>
    </div>
  );
}  

export default App;
