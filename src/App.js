import React, {useState, useEffect} from "react";
import './App.css';


function App() {
  const [message, setMessage] = useState("");

  useEffect(()=>{
    fetch("http://localhost:8000/message")
    .then((res)=>res.json())
    .then((data)=>setMessage(data));
  },[])

  console.log(message);

  return (
    <div className="App">
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>
          { message.map((person)=>
          (
            <tr>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
