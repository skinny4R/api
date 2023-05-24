import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
      
  }, []);
  console.log(users);
  return <div className="App">
    {
      users.map((user)=>
      <div>
<h1>{user.title}</h1>

      </div>
      )
    }
  </div>;
}

export default App;
