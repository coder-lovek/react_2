import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [yup, setYup] = useState({});

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setYup(res.data); // Set the entire response object
    });
  };

  return (
    <div className="App">
      <input
        placeholder='Ex..Messi'
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age: {yup.age}</h1>
    </div>
  );
}

export default App;
