import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data)) 
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div className="App">
      <h1>User List (React + Vite)</h1>
      
    
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App