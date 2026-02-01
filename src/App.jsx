import {useState} from "react";
import './App.css'
import Welcome from './components/Welcome';

function App() {
  const [users, setUsers] = useState([{name: "Mathilde", age: 22}]);
  console.log(users);

  return (
    <>
     <h1>My First React App</h1>
     <Welcome name="Mathilde" age="22"/>
     <Welcome name="Kim" age="50"/>
     <Welcome name="Anne-Mette" age="58"/>
     <Welcome name="Jonas" age="27"/>
     <Welcome name="Noah" age="22"/>
    </>
  );
}

export default App
