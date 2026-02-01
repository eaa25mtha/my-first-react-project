import {useState, useEffect} from "react";
import './App.css'
import Welcome from './components/Welcome';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect (() => {
    //Fetch data from API
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    );
    const data = await response.json();
    setUsers(data);
  }

  return (
    <>
     <h1>My First React App</h1>

     {users.map(user => (
      <Welcome key={user.id} name={user.name} mail={user.mail}/>
     ))}
    </>
  );
}

export default App
